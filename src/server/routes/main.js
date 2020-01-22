import debug from 'debug'
import chalk from 'chalk'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StaticRouter } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { ServerStyleSheet } from 'styled-components'
import serverRoutes from '../../frontend/routes/serverRoutes'
import reducer from '../../frontend/reducers'
import render from '../render'

function main(req, res, next) {
  const sheet = new ServerStyleSheet()
  try {
    let initialState
    try {
      const { email, name, id } = req.cookies
      initialState = {
        user: { email, name, id },
        playing: {},
        search: [],
        library: [],
        trends: [],
        originals: [],
      }
    } catch (error) {
      debug(chalk.redBright(error))('app:main')
    }
    const isAuth = Object.prototype.hasOwnProperty.call(initialState, 'id')
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
