const {GraphQLString, GraphQLObjectType} = require('graphql');
const UserType = require('./user.js');
const ProductsType = require('./products.js');

const QueryType = new GraphQLObjectType({

  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: {
        username: {type: GraphQLString}
      }
    },
    resolve: (object, args, request) => {
      // do db call here
      return 'user';
    },

    products: {
      type: ProductsType,
      args: {
        id: {type: GraphQLString}
      },
      resolve: (object, args, request) => {
        // do db call here
        return 'products';
      }
    }
  }
});

module.exports = QueryType;
