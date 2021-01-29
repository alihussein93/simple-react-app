import React, { Component } from 'react';
import propTypes from 'prop-types';

import LoginUI from 'pages/Login';

class Login extends Component {
  render() {
    return (
      <>
        <LoginUI />
      </>
    );
  }
}

Login.propTypes = {};

export default Login;
