import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <button className="button" type="submit">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
