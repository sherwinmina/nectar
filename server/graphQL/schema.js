const {GraphQLSchema} = require('graphql');
const QueryType = require('./types/query.js');

const schema = new GraphQLSchema({
  query: QueryType
});

module.exports = schema;
