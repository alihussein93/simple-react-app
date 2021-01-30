import React, { Component } from 'react';
import moment from 'moment';

import SignupUI from 'pages/Signup';
import Header from 'components/Header';

import Validator from 'utils/validator';
import APIAdapter from 'utils/api-adapter';

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
      isLoading: false,
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
            error = Validator.checkPassword(field[key]);
            break;
          case 'dob':
            error = Validator.checkDate(field[key]);
            break;
          default:
            error = Validator.checkFormField(field[key], {
              notEmpty: true,
              notNumeric: true,
              notForeign: true,
              notSpecial: true,
              maxLength: 30
            });
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
    console.log(this.validateForm());
    if (this.validateForm()) {
      return;
    }
    this.signup();
    event.preventDefault();
  };

  async signup() {
    try {
      const { firstName, lastName, email, password, dob, isAdmin } = this.state;
      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      const res = await APIAdapter.signup({
        firstName,
        lastName,
        email,
        password,
        dob,
        age: moment().diff(moment(dob, 'DD-MM-YYYY'), 'years'),
        isAdmin: false
      });
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      firstName,
      lastName,
      age,
      dob,
      email,
      password,
      isLoading,
      errors
    } = this.state;
    const data = {
      firstName,
      lastName,
      age,
      dob,
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
        <SignupUI data={data} events={events} errors={errors} />
      </>
    );
  }
}

export default Signup;
