import React from 'react';
import Form from './Form.jsx';
import axios from 'axios';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: null
    };
    this.onChange = this.onChange.bind(this);
    this.submitLoginInfo = this.submitLoginInfo.bind(this);
  }

  onChange(event) {
    this.receivingCredentials({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  receivingCredentials(credentials) {
    this.setState((state) => {
      return {credentials: {
        ...state.credentials,
        ...credentials
      }};
    });
  }

  async submitLoginInfo({username, password}) {
    let response;
    try {
      response = await axios.post('/login', {
        credentials: {
          username: username,
          password: password
        }
      });
    } catch (error) {
      response = error;
    }
    console.log(response, 5);
  }

  render() {
    return (
      <div className='loginMain'>
        <Form
          updateCredentials={this.onChange}
          submitLoginInfo={this.submitLoginInfo}
          credentials={this.state.credentials}
          />
      </div>
    );
  }

}

export default Login;
