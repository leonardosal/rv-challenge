import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Engine from './pages/Engine';
import Wheels from './pages/Wheels';
import Result from './pages/Result';
import Color from './pages/Color';

const Routes = (props) => (
  <Switch>
    <Route exact path="/" render={(routerProps) => <Home {...routerProps} {...props} />} />
    <Route path="/engine" render={(routerProps) => <Engine {...routerProps} {...props} />} />
    <Route path="/wheels" render={(routerProps) => <Wheels {...routerProps} {...props} />} />
    <Route path="/result" render={(routerProps) => <Result {...routerProps} {...props} />} />
    <Route path="/color" render={(routerProps) => <Color {...routerProps} {...props} />} />
  </Switch>
);

export default Routes;
