import debug from 'debug'
import chalk from 'chalk'
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
  try {
    let initialState = {}
    const { token, id, name, email } = req.cookies
    const isAuth = token.length > 0 && id.length > 0
    if (isAuth) {
      const user = { id, name, email }

      const moviesResponse = await axios({
        url: `${config.apiUrl}/movies`,
        headers: { Authorization: `Bearer ${token}` },
        method: 'get',
      })

      const trends = moviesResponse.data.data.filter(
        movie => movie.contentRating === 'PG'
      )

      const originals = moviesResponse.data.data.filter(
        movie => movie.contentRating === 'NC-17'
      )

      initialState = {
        user,
        trends,
        originals,
        playing: {},
        search: [],
        library: [],
      }
    } else {
      initialState = {
        user: {},
        playing: {},
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
