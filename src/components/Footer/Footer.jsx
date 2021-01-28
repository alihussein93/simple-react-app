import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Footer = (props) => (
  <footer className='footer'>
    <div className='container'>
      <div className='content flex flex-align-center flex-justify-space-between'>
        <div className='footer__links'>
          Made with love by{' '}
          <Link to='https://alialjarah.com/' className='footer__link'>
            Ali Aljarah
          </Link>
        </div>
        <p className='footer__rights'>All rights are reserved 2021</p>
      </div>
    </div>
  </footer>
);

export default Footer;
