const webpackMiddleware = require('./webpack.js');
const graphQLMiddleware = require('./graphQL.js');
const authorizeMiddleware = require('./authorize.js');


module.exports = [
  webpackMiddleware,
  authorizeMiddleware,
  graphQLMiddleware
];
