import React from 'react';
import propTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router';

import Landing from 'containers/Landing';

const authorizedRoutes = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Redirect from='*' to='/' />
  </Switch>
);

const unAuthorizedRoutes = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Redirect from='*' to='/' />
  </Switch>
);

const Routes = ({ isAuthenticated }) => {
  return isAuthenticated ? authorizedRoutes() : unAuthorizedRoutes();
};

Routes.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

export default Routes;
