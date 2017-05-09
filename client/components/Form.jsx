import React from 'react';
import TextInput from './TextInput.jsx';
import Button from './Button.jsx';

const Form = (props) => {
  return (
    <form
      className='authForm'
      onChange={(event) => {
        props.updateCredentials(event);
      }}
      onSubmit={(event) => {
        event.preventDefault();

        console.log(props.credentials);
        props.submitLoginInfo(props.credentials);
      }}
      >
      <h1>hi</h1>
      <TextInput
        type='text'
        name='username'
      />
      <TextInput
        type='password'
        name='password'/>
      <Button
        className='loginButton'
      />
    </form>
  );
};

export default Form;
