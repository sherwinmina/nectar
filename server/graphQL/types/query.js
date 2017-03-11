const {GraphQLString, GraphQLObjectType} = require('graphql');
const UserType = require('./user.js');
const ProductsType = require('./products.js');
const db = require('../../../db/dbConnection.js');
const sql = require('../../../db/sql/sql.js');

const QueryType = new GraphQLObjectType({

  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: {
        username: {type: GraphQLString}
      },
      resolve: (object, args, request) => {
        return db.one(sql.users.get, args)
        .then(user => user)
        .catch(err => err);
      }
    },

    products: {
      type: ProductsType,
      args: {
        id: {type: GraphQLString}
      },
      resolve: (object, args, request) => {
        return db.any(sql.products.getAll, args)
        .then(products => products)
        .catch(error => error);
      }
    }
  }

});

module.exports = QueryType;
