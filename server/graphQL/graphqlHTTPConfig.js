const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');

const graphqlHTTPconfig = graphqlHTTP(request => {
  const startTime = Date.now();
  return {
    schema,
    graphiql: true,
    extensions ({document, variables, operationName, result}) {
      return {runTime: Date.now() - startTime};
    },
    formatError (error) {
      return {
        message: error.message,
        location: error.location,
        stack: error.stack
      };
    }
  };
});

module.exports = graphqlHTTPconfig;
