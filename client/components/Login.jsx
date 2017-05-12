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

    if (response instanceof Error) {
      console.log({error: response});
    } else {
      console.log(response.data);
      window.localStorage.setItem('jwt', response.data.newJWT);
      // setState on app for user and will rerender
      this.props.updateUserAuthorization(response.data.user, true);
    }

  }

  render() {
    return (
      <div className='loginMain'>
        <img
          src={require('../media/SFHBlogoEstablishedBlack.png')}
          alt='San Francisco HomeBrewers Guild logo est'
          className='logoEstablished
          '/>
        <Form
          updateCredentials={this.onChange}
          submitLoginInfo={this.submitLoginInfo}
          credentials={this.state.credentials}
          />
        <img
          src={require('../media/HomebrewersGuildNameLogo.png')}
          alt='San Francisco Homebrewers Guild Logo name'
          className='logoName'
        />
      </div>
    );
  }

}

export default Login;
