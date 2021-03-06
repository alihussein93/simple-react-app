import React from 'react';
import propTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router';

import Observer from './observer';
import Landing from 'containers/Landing';
import Signup from 'containers/Signup';
import Login from 'containers/Login';
import Logout from 'containers/Logout';
import Dashboard from 'containers/Dashboard';
import Persons from 'containers/Persons';

const authorizedRoutes = (refreshToken) => (
  <>
    <Switch>
      <Route exact path='/home' component={Dashboard} />
      <Route exact path='/persons' component={Persons} />{' '}
      <Route exact path='/logout' component={Logout} />
      <Redirect from='*' to='/home' />
    </Switch>
    <Observer refreshToken={refreshToken} />
  </>
);

const unAuthorizedRoutes = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />
    <Redirect from='*' to='/' />
  </Switch>
);

const Routes = ({ isAuthenticated, refreshToken }) => {
  return isAuthenticated
    ? authorizedRoutes(refreshToken)
    : unAuthorizedRoutes();
};

Routes.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

export default Routes;
