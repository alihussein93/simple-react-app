import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Input from 'components/Input';
import Button from 'components/Button';

import Enums from 'constants/enums';

import './style.scss';

const Signup = ({
  data: { firstName, lastName, email, password, dob },
  events: { onInputChange, onInputBlur, onSubmit },
  errors,
  intl: { formatMessage }
}) => (
  <div className='signup'>
    <div className='signup__title'>
      <FormattedMessage id='app.signup' />
    </div>
    <div className='signup__form-wrapper'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='form'
      >
        <div className='row flex'>
          <div className='form__field form__field--name'>
            <Input
              id='firstName'
              name='firstName'
              placeholder={formatMessage({
                id: 'signup.placeholder.firstName'
              })}
              value={firstName}
              label={formatMessage({ id: 'app.first_name' })}
              error={
                errors.firstName &&
                formatMessage(
                  { id: errors.firstName },
                  { maxLength: Enums.defaultValidations.name.maxLength }
                )
              }
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
          </div>
          <div className='form__field form__field--name'>
            <Input
              id='lastName'
              name='lastName'
              placeholder={formatMessage({
                id: 'signup.placeholder.lastName'
              })}
              value={lastName}
              label={formatMessage({ id: 'app.last_name' })}
              error={
                errors.lastName &&
                formatMessage(
                  { id: errors.lastName },
                  { maxLength: Enums.defaultValidations.name.maxLength }
                )
              }
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
          </div>
        </div>
        <div className='row flex'>
          <div className='form__field form__field--email'>
            <Input
              id='email'
              name='email'
              placeholder={formatMessage({
                id: 'signup.placeholder.email'
              })}
              value={email}
              label={formatMessage({ id: 'app.email' })}
              error={
                errors.email &&
                formatMessage(
                  { id: errors.email },
                  { maxLength: Enums.defaultValidations.email.maxLength }
                )
              }
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
          </div>
        </div>
        <div className='row flex'>
          <div className='form__field form__field--password'>
            <Input
              id='password'
              name='password'
              type='password'
              placeholder={formatMessage({
                id: 'signup.placeholder.password'
              })}
              value={password}
              label={formatMessage({ id: 'app.password' })}
              error={
                errors.password &&
                formatMessage(
                  { id: errors.password },
                  { minLength: Enums.defaultValidations.password.minLength }
                )
              }
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
          </div>
        </div>
        <div className='row row--ex-mg flex'>
          <div className='form__field form__field--dob'>
            <Input
              id='dob'
              name='dob'
              placeholder={formatMessage({
                id: 'signup.placeholder.dob'
              })}
              value={dob}
              label={formatMessage({ id: 'app.dob' })}
              error={errors.dob && formatMessage({ id: errors.dob })}
              onChange={onInputChange}
              onBlur={onInputBlur}
            />
          </div>
        </div>
        <div className='row  flex'>
          <div className='form__field form__field--signup flex flex-justify-center'>
            <Button style='inverted' onClick={onSubmit}>
              <FormattedMessage id='app.signup' />
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

Signup.propTypes = {
  data: propTypes.shape({}).isRequired,
  events: propTypes.shape({}).isRequired,
  errors: propTypes.shape({}).isRequired
};

export default injectIntl(Signup);