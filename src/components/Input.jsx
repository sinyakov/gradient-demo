import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className="input"
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  onChange: () => {},
};

export default Input;
