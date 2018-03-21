import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Input = ({
  placeholder, value, onChange, onFocus, isActive,
}) => (
  <input
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onFocus={onFocus}
    className={cn('input', isActive && 'input--active')}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  isActive: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  onChange: () => {},
  onFocus: () => {},
  isActive: false,
};

export default Input;
