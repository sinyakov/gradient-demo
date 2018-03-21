import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  placeholder, value, onChange, onFocus,
}) => (
  <input
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onFocus={onFocus}
    className="input"
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  onChange: () => {},
  onFocus: () => {},
};

export default Input;
