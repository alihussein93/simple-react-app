import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';

import './style.scss';

const Header = ({ match: { path } }) => (
  <header className='header '>
    <div className='container'>
      <div className='content flex flex-align-center'>
        <Button
          extraClass='header__link'
          type='link'
          path={path.includes('login') ? '/' : '/login'}
          style='primary-outline'
        >
          {path.includes('login') ? (
            <FormattedMessage id='app.home' />
          ) : (
            <FormattedMessage id='app.login' />
          )}
        </Button>
        <Button
          extraClass='header__link'
          type='link'
          path={path.includes('signup') ? '/' : '/signup'}
        >
          {' '}
          {path.includes('signup') ? (
            <FormattedMessage id='app.home' />
          ) : (
            <FormattedMessage id='app.signup' />
          )}
        </Button>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  match: propTypes.object.isRequired
};

export default withRouter(Header);
