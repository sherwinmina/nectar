const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const graphqlHTTPconfig = require('./graphQL/graphqlHTTPconfig.js');

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTPconfig);



module.exports = app;
