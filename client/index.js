import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {ApolloClient, ApolloProvider} from 'react-apollo';
import App from './components/App.jsx';


const client = new ApolloClient();


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
        <Route path='/' component={App}></Route>
    </Router>
  </ApolloProvider>,
  document.querySelector('.app')
);
