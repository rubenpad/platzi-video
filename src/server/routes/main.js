import React from 'react'
import axios from 'axios'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StaticRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { ServerStyleSheet } from 'styled-components'
import serverRoutes from '../../frontend/routes/serverRoutes'
import reducer from '../../frontend/reducers'
import render from '../render'
import { config } from '../config'

async function main(req, res, next) {
  const sheet = new ServerStyleSheet()
  const isAuth =
    Object.keys(req.cookies).length > 0
      ? req.cookies.token.length > 0 && req.cookies.id.length > 0
      : false

  try {
    let initialState = {}
    if (isAuth) {
      const { token, id, email, name } = req.cookies
      const user = { id, email, name }

      const moviesResponse = await axios({
        url: `${config.apiUrl}/movies`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'get',
      })

      const userMoviesResponse = await axios({
        url: `${config.apiUrl}/user-movies?userId=${id}`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'get',
      })

      const library = userMoviesResponse.data.data
        .map(userMovie => {
          return moviesResponse.data.data.filter(movie => {
            if (movie.id === userMovie.movieId) {
              const userMovieId = userMovie.id
              return { ...movie, userMovieId }
            }
          })
        })
        .flat()

      const trends = moviesResponse.data.data.filter(
        movie => movie.contentRating === 'PG'
      )

      const originals = moviesResponse.data.data.filter(
        movie => movie.contentRating === 'NC-17'
      )

      initialState = {
        user,
        library,
        trends,
        originals,
        search: [],
      }
    } else {
      initialState = {
        user: {},
        search: [],
        library: [],
        trends: [],
        originals: [],
      }
    }
    const store = createStore(reducer, initialState)
    const body = renderToString(
      sheet.collectStyles(
        <Provider store={store}>
          <StaticRouter location={req.url} context={{}}>
            {renderRoutes(serverRoutes(isAuth))}
          </StaticRouter>
        </Provider>
      )
    )
    const styles = sheet.getStyleTags()
    const preloadedState = store.getState()
    res.send(render(body, styles, preloadedState))
  } catch (err) {
    next(err)
  }
}

module.exports = main
