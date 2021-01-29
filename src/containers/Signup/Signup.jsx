import React, { Component } from 'react';
import propTypes from 'prop-types';

import SignupUI from 'pages/Signup';
import Header from 'components/Header';

import Validator from 'utils/validator';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dob: '',
      age: '',
      email: '',
      password: '',
      isAdmin: '',
      errors: {
        firstName: '',
        lastName: '',
        dob: '',
        age: '',
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
        error = Validator.checkPassword(value);
        break;
      case 'dob':
        error = Validator.checkDate(value);
        break;
      default:
        error = Validator.checkFormField(value, {
          notEmpty: true,
          notNumeric: true,
          notForeign: true,
          notSpecial: true,
          maxLength: 30
        });
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
    const { firstName, lastName, email, password, dob } = this.state;
    const fields = [
      { firstName },
      { lastName },
      { email },
      { password },
      { dob }
    ];
    let errors = {};
    let isError = false;
    fields.map((field) => {
      Object.keys(field).forEach((key) => {
        switch (key) {
          case 'email':
            errors = { ...errors, [key]: Validator.checkEmail(field[key]) };
            break;
          case 'password':
            errors = { ...errors, [key]: Validator.checkPassword(field[key]) };
            break;
          case 'dob':
            errors = { ...errors, [key]: Validator.checkDate(field[key]) };
            break;
          default:
            errors = {
              ...errors,
              [key]: Validator.checkFormField(field[key], {
                notEmpty: true,
                notNumeric: true,
                notForeign: true,
                notSpecial: true,
                maxLength: 30
              })
            };
            break;
        }
      });
    });

    if ('email' in errors || 'password' in errors) {
      isError = true;
    }
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
    event.preventDefault();
  };

  async signup() {
    try {
      const { firstName, lastName, email, password, dob, isAdmin } = this.state;
    } catch (error) {}
  }

  render() {
    const {
      firstName,
      lastName,
      age,
      dob,
      email,
      password,
      errors
    } = this.state;
    const data = {
      firstName,
      lastName,
      age,
      dob,
      email,
      password
    };
    const events = {
      onInputChange: this.onInputChange,
      onInputBlur: this.onInputBlur,
      onSubmit: this.onSubmit
    };
    return (
      <>
        <Header />
        <SignupUI data={data} events={events} errors={errors} />
      </>
    );
  }
}

Signup.propTypes = {};

export default Signup;
