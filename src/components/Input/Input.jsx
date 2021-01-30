import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Input = ({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  extraClass,
  error,
  isDisabled,
  onChange,
  onBlur
}) => (
  <div
    className={classNames({
      'input flex flex-column': true,
      [extraClass]: extraClass.length > 0
    })}
  >
    <label
      htmlFor={id}
      className={classNames({
        input__label: true,
        'input__label--error': error.length > 0
      })}
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      className={classNames({
        input__field: true,
        'input__field--error': error.length > 0
      })}
      onChange={onChange}
      onBlur={onBlur}
      disabled={isDisabled}
    />
    {error.length > 0 && <div className='input__error'>{error}</div>}
  </div>
);

Input.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  id: propTypes.string,
  label: propTypes.string,
  type: propTypes.oneOf(['text', 'password']),
  extraClass: propTypes.string,
  placeholder: propTypes.string,
  error: propTypes.string,
  isDisabled: propTypes.bool,
  onBlur: propTypes.func
};

Input.defaultProps = {
  id: '',
  label: '',
  type: 'text',
  extraClass: '',
  placeholder: '',
  error: '',
  isDisabled: false,
  onBlur: () => {}
};

export default Input;
