import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Input from 'components/Input';
import Button from 'components/Button';

import Enums from 'constants/enums';

import './style.scss';

const Login = ({
  data: { email, password, isSubmitDisabled },
  events: { onInputChange, onInputBlur, onSubmit },
  errors,
  intl: { formatMessage }
}) => (
  <div className='login'>
    <div className='container'>
      <div className='login__form-wrapper'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className='form'
        >
          <div className='row'>
            <div className='login__title'>
              <FormattedMessage id='app.login' />
            </div>
          </div>

          <div className='row flex'>
            <div className='form__field form__field--email'>
              <Input
                id='email'
                name='email'
                placeholder={formatMessage({
                  id: 'app.placeholder.email'
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
          <div className='row row--ex-mg flex'>
            <div className='form__field form__field--password'>
              <Input
                id='password'
                name='password'
                type='password'
                placeholder={formatMessage({
                  id: 'app.placeholder.password'
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
          <div className='row  flex'>
            <div className='form__field form__field--login flex flex-justify-center'>
              <Button
                style='inverted'
                onClick={onSubmit}
                isDisabled={isSubmitDisabled}
              >
                <FormattedMessage id='app.login' />
              </Button>
            </div>
          </div>
        </form>
      </div>{' '}
    </div>
  </div>
);

Login.propTypes = {
  data: propTypes.shape({
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
    isSubmitDisabled: propTypes.bool.isRequired
  }).isRequired,
  events: propTypes.shape({}).isRequired,
  errors: propTypes.shape({
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired
  }).isRequired
};

export default injectIntl(Login);
