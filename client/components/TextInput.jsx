import React from 'react';
import PropTypes from 'propTypes';

const TextInput = (props) => {

  return (
    <input type={props.type} name={props.name}></input>
  );

};

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default TextInput;
