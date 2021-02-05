import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './style.scss';

const Button = (props) =>
  props.type === 'button' ? renderButton(props) : renderLink(props);

const renderButton = ({
  size,
  style,
  children,
  extraClass,
  isDisabled,
  onClick,
  isLoading
}) => (
  <button
    className={classNames({
      button: true,
      [`button--${size}`]: size.length > 0,
      [`button--${style}`]: style.length > 0,
      [extraClass]: extraClass.length > 0
    })}
    onClick={onClick}
    disabled={isDisabled || isLoading}
  >
    {isLoading && <div className='button__loader' />}
    {children}
  </button>
);

const renderLink = ({ path, size, style, extraClass, children }) => (
  <Link
    to={path}
    className={classNames({
      button: true,
      [`button--${size}`]: size.length > 0,
      [`button--${style}`]: style.length > 0,
      [extraClass]: extraClass.length > 0
    })}
  >
    {children}
  </Link>
);

Button.propTypes = {
  children: propTypes.node.isRequired,
  size: propTypes.string,
  style: propTypes.string,
  path: propTypes.string,
  type: propTypes.string,
  extraClass: propTypes.string,
  onClick: propTypes.func,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool
};

Button.defaultProps = {
  size: 'md',
  style: 'primary',
  type: 'button',
  path: '',
  extraClass: '',
  isDisabled: false,
  isLoading: false,
  onClick: () => {}
};

export default Button;
