import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Route } from 'react-router-dom';
import Login from './Login.jsx';
import Home from './Home.jsx';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      authenticated: false
    };
  }
  render() {
    return (
      <Route path='/'
      render={
        () => {
          return this.state.authenticated ? <Home/> : <Login/>;
        }
      }/>
    );
  }
}

export default App;
