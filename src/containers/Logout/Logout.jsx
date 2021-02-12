import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import LocalStore from 'utils/local-store';
import Actions from './actions';

class Logout extends Component {
  componentDidMount() {
    this.logout();
  }

  logout() {
    const {
      unAuthenticateUser,
      history: { push }
    } = this.props;
    LocalStore.clearSession();
    push('/');

    unAuthenticateUser();
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  unAuthenticateUser: () => dispatch(Actions.unAuthenticateUser())
});

Logout.propTypes = {
  unAuthenticateUser: propTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Logout);
