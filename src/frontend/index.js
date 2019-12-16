import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import App from './routes/App';

if (typeof window !== 'undefined') {
  const composeEnhacers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadedState, composeEnhacers());
  const history = createBrowserHistory();

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
}
