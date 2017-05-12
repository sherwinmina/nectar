import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login.jsx';
import Home from './Home.jsx';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.authorizedUser || null
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path='/'
        render={
          (props) => {
            return this.state.user !== null /* false */ ? <Redirect to='/home'/> : <Redirect to='/login'/>;
            // return this.state.user !== null ? <Home props={props} history={ props.history }/> : <Login updateUserAuthorization={this.updateUserAuthorization}/>;
          }
        }/>
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home} user={this.state.user}/>
      </Switch>

    );
  }
}

export default App;
