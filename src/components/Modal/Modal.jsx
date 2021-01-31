import React from 'react';
import propTypes from 'prop-types';

import './style.scss';

const Modal = (props) => (
  <div className='modal'>
    <div className='modal__box'>
      <div className='modal__header'>header</div>
      <div className='modal__body'>body</div>
      <div className='modal__footer'>footer</div>
    </div>
  </div>
);
