import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginUI from 'pages/Login';
import Header from 'components/Header';

import Validator from 'utils/validator';
import APIAdapter from 'utils/api-adapter';
import LocalStore from 'utils/local-store';
import Actions from './actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      errors: {
        email: '',
        password: ''
      }
    };
  }

  onInputChange = ({ target: { value, name } }) => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: ''
      }
    }));
  };

  onInputBlur = ({ target: { value, name } }) => {
    let error = '';
    switch (name) {
      case 'email':
        error = Validator.checkEmail(value);
        break;
      case 'password':
        error = Validator.checkLoginPassword(value);
        break;
      default:
        break;
    }
    this.setState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [name]: error
      }
    }));
  };

  validateForm = () => {
    const { email, password } = this.state;
    const fields = [{ email }, { password }];
    let error = '';
    let errors = {};
    let isError = false;
    fields.map((field) => {
      Object.keys(field).forEach((key) => {
        switch (key) {
          case 'email':
            error = Validator.checkEmail(field[key]);
            break;
          case 'password':
            error = Validator.checkLoginPassword(field[key]);
            break;
          default:
            break;
        }
        if (error.length > 0) {
          errors = { ...errors, [key]: error };
          isError = true;
        }
      });
    });
    this.setState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        ...errors
      }
    }));
    return isError;
  };

  onSubmit = (event) => {
    if (this.validateForm()) {
      return;
    }
    this.login();
    event.preventDefault();
  };

  async login() {
    try {
      const { email, password } = this.state;
      const { authenticateUser } = this.props;
      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      const {
        data: { tokens }
      } = await APIAdapter.login({
        email,
        password
      });

      LocalStore.setTokens(tokens);
      APIAdapter.init();
      authenticateUser({
        tokens
      });
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
    } catch (error) {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          server: error.message
        },
        isLoading: false
      }));
    }
  }

  render() {
    const { email, password, isLoading, errors } = this.state;
    const data = {
      email,
      password,
      isSubmitDisabled: isLoading
    };
    const events = {
      onInputChange: this.onInputChange,
      onInputBlur: this.onInputBlur,
      onSubmit: this.onSubmit
    };
    return (
      <>
        <Header />
        <LoginUI data={data} events={events} errors={errors} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  authenticateUser: (data) => dispatch(Actions.authenticateUser(data))
});

Login.propTypes = {
  dispatch: propTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Login);
