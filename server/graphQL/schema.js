const [QueryType, UserType, ProductsType, CategoriesType, PostsType] = require('./types/query.js');
const {makeExecutableSchema} = require('graphql-tools');
const Resolvers = require('./resolvers');

const Schema = /* GraphQL */`
  schema {
    query: Query
  }
`;

const executableSchema = makeExecutableSchema({
  typeDefs: [Schema, QueryType, UserType, ProductsType, CategoriesType, PostsType],
  resolvers: Resolvers,
  logger: {
    log: (error) => {
      console.log(error);
    }
  }
});

module.exports = executableSchema;
