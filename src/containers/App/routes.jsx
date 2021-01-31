import React from 'react';
import propTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router';

import Landing from 'containers/Landing';
import Signup from 'containers/Signup';
import Login from 'containers/Login';
import Dashboard from 'containers/Dashboard';

const authorizedRoutes = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Redirect from='*' to='/' />
  </Switch>
);

const unAuthorizedRoutes = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />
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
