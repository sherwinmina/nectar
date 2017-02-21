const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const bodyParser = require('body-parser');

const schema = require('./graphQL/schema.js');

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


// request => {
//   const startTime = Date.now();
//   return {
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//     extensions ({document, variables, operationName, result}) {
//       return {runTime: Date.now() - startTime};
//     },
//     formatError (error) {
//       return {
//         message: error.message,
//         location: error.location,
//         stack: error.stack
//       };
//     }
//   };
// })

module.exports = app;
