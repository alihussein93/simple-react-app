import React from 'react';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';

import './style.scss';

const Header = (props) => (
  <header className='header '>
    <div className='container'>
      <div className='content flex flex-align-center'>
        <Button
          extraClass='header__link'
          type='link'
          path='/login'
          style='primary-outline'
        >
          <FormattedMessage id='app.login' />
        </Button>
        <Button extraClass='header__link' type='link' path='/signup'>
          <FormattedMessage id='app.signup' />
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
