import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import serverRoutes from '../../frontend/routes/serverRoutes';
import reducer from '../../frontend/reducers';
import initialState from '../../frontend/initialState';
import render from '../render';

function main(req, res, next) {
  const sheet = new ServerStyleSheet();
  try {
    const store = createStore(reducer, initialState);
    const body = renderToString(
      sheet.collectStyles(
        <Provider store={store}>
          <StaticRouter location={req.url} context={{}}>
            {renderRoutes(serverRoutes)}
          </StaticRouter>
        </Provider>
      )
    );
    const styles = sheet.getStyleTags();
    const preloadedState = store.getState();
    res.send(render(body, styles, preloadedState));
  } catch (err) {
    next(err);
  }
}

module.exports = main;
