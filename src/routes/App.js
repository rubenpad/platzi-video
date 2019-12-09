import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from '../GlobalStyle';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
