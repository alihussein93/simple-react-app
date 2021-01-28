import React from 'react';
import propTypes from 'prop-types';

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
          Login
        </Button>
        <Button extraClass='header__link' type='link' path='/signup'>
          Signup
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
