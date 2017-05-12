import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {

  return (
    <input
      className={props.className}
      type={props.type}
      name={props.name}
      placeholder={props.name}
    />
  );

};

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default TextInput;
