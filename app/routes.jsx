import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import HomePage from './containers/HomePage';
import Information from './containers/Information';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="information" component={ Information } />
  </Route>
);
