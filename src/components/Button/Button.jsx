import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Button = ({ size, style, children, onClick }) => (
  <button
    className={classNames({
      button: true,
      [`button--${size}`]: size.length > 0,
      [`button--${style}`]: style.length > 0
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: propTypes.node.isRequired,
  size: propTypes.string
};

Button.defaultProps = {
  size: 'md',
  style: 'primary'
};

export default Button;
