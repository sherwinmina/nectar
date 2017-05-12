import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import App from './components/App.jsx';
import authorizeUser from './utils.js';
import './index.less';


const networkInterface = createNetworkInterface({
  uri: '/graphql'
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    const jwt = window.localStorage.getItem('jwt');
    req.options.headers.authorization = jwt ? `Bearer ${jwt}` : null;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface
});

(async function renderDomWithAuthorizedUser() {

  let user = await authorizeUser();

  return ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <App authorizedUser={user}/>
      </Router>
    </ApolloProvider>,
    document.querySelector('.app')
  );

})();
