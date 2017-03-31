import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import {Router, Route, browserHistory, applyRouterMiddleware} from 'react-router';
import useRelay from 'react-router-relay';
import App from './components/App.jsx';


Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:3000/graphql')
);


const queries = {
  User: () => Relay.QL`query {user}`,
  Products: () => Relay.QL`query {products}`,
  Posts: () => Relay.QL`query {posts}`
};


ReactDOM.render(
  <Router
    forceFetch
    render={applyRouterMiddleware(useRelay)}
    environment={Relay.Store}
    history={browserHistory}
    >
      <Route path='/' component={App} queries={queries.posts}></Route>

  </Router>,
  document.querySelector('.app')
);
