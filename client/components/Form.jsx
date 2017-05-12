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
        props.submitLoginInfo(props.credentials);
      }}
      >
      <TextInput
        className='textInput'
        type='text'
        name='username'
      />
      <TextInput
        className='textInput'
        type='password'
        name='password'/>
      <Button
        text='Login'
        className='loginButton'
      />
    </form>
  );
};

export default Form;
