import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from '../GlobalStyle';
import Home from '../containers/Home';
import Signin from '../containers/Signin';
import Signup from '../containers/Signup';
import NotFound from '../components/NotFound';
import Player from '../containers/Player';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/player/:id" component={Player} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
