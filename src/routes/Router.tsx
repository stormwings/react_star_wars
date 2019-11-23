import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch, BrowserRouterProps } from 'react-router-dom';

import App from '../App';
import { NoMatch } from '../components/dumb/NoMatch/NoMatch';

const Router: FunctionComponent<BrowserRouterProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />

        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
