import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Signup from '../containers/Signup'
import NotFound from '../components/NotFound'
import Player from '../containers/Player'
import { GlobalStyle } from '../GlobalStyle'

const App = ({ isAuth }) => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={isAuth ? Home : Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/player/:id" component={isAuth ? Player : Login} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
