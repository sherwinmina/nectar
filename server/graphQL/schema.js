const [QueryType, UserType, ProductsType, CategoriesType, PostsType] = require('./types/query.js');
const {makeExecutableSchema, addMockFunctionsToSchema} = require('graphql-tools');
const Resolvers = require('./resolvers');
// console.log(Resolvers);

const Schema = /* GraphQL */`
  schema {
    query: Query
  }
`;

const executableSchema = makeExecutableSchema({
  typeDefs: [Schema, QueryType, UserType, ProductsType, CategoriesType, PostsType],
  // resolvers: Resolvers,
  logger: {
    log: (error) => {
      console.log(error);
    }
  }
});

// console.log(Object.prototype.toString.call(executableSchema), executableSchema.constructor.name);

addMockFunctionsToSchema({schema: executableSchema});

module.exports = executableSchema;
