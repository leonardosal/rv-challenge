import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const loading = () => (
  <div>Loading...</div>
)

const Home = Loadable({
  loader: () =>
    import('./pages/Home'),
  loading
});

const Engine = Loadable({
  loader: () =>
    import('./pages/Engine'),
  loading
});

const Wheels = Loadable({
  loader: () =>
    import('./pages/Wheels'),
  loading
});

const Result = Loadable({
  loader: () =>
    import('./pages/Result'),
  loading
});

const Color = Loadable({
  loader: () =>
    import('./pages/Color'),
  loading
});

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
