import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import initialState from '../initialState'

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
)
const history = createBrowserHistory()

const ProviderStoreMock = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
)

export default ProviderStoreMock
