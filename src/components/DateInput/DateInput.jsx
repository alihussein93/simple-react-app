import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import Cleave from 'cleave.js/react';

import dateConfig from './date-config';

import '../Input/style.scss';

const DateInput = ({
  id,
  name,
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
    <label htmlFor={id} className='input__label'>
      {label}
    </label>

    <Cleave
      options={dateConfig}
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

DateInput.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  id: propTypes.string,
  label: propTypes.string,
  extraClass: propTypes.string,
  placeholder: propTypes.string,
  error: propTypes.string,
  isDisabled: propTypes.bool,
  onBlur: propTypes.func
};

DateInput.defaultProps = {
  id: '',
  label: '',
  extraClass: '',
  placeholder: '',
  error: '',
  isDisabled: false,
  onBlur: () => {}
};

export default DateInput;
