import React from 'react';
import TextInput from './TextInput.jsx';
import Button from './Button.jsx';
import axios from 'axios';

class Login extends React.Component {
  contructor() {
    this.state = {};
  }

  onChange(event) {
    return {
      [event.target.name]: event.target.value
    };
  }

  receivingCredentials(credentials) {
    this.setState(credentials);
  }

  async submitLoginInfo({username, password}) {
    axios.post()
  }

  render() {
    return (
      <div className='inputForm'>
        <TextInput type='text' name='unsername'/>
        <TextInput type='password' name='password'/>
        <Button className='loginButton' onClick={}/>
      </div>
    );
  }

}

export default Login;
