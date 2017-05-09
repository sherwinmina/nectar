import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import App from './components/App.jsx';


const client = new ApolloClient();


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App/>
    </Router>
  </ApolloProvider>,
  document.querySelector('.app')
);
