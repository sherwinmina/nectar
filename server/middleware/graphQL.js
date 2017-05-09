const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const graphQLOptions = require('../graphQL/graphQLOptions.js');
const express = require('express');
const app = express();


app.use('/graphql', graphqlExpress(graphQLOptions));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));


module.exports = app;
