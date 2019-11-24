import React, { FunctionComponent, Fragment } from 'react';
import { BrowserRouter, Route, Switch, BrowserRouterProps } from 'react-router-dom';

import { NoMatch } from '../components/dumb/NoMatch/NoMatch';
import Character from '../components/views/Character/Character';
import Movie from '../components/views/Movie/Movie';

const Router: FunctionComponent<BrowserRouterProps> = () => (
  <Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/character" component={Character} />
        {/* <Route exact path="/character/:id" component={Character} /> */}
        <Route exact path="/movie" component={Movie} />
        {/* <Route exact path="/movie/:id" component={Movie} /> */}
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default Router;
