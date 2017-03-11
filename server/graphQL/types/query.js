const {GraphQLString, GraphQLObjectType, GraphQLList} = require('graphql');
const UserType = require('./user.js');
const ProductsType = require('./products.js');
const PostsType = require('./posts.js');
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
      type: new GraphQLList(ProductsType),
      resolve: (object, args, request) => {
        return db.any(sql.products.getAll)
        .then(products => products)
        .catch(error => error);
      }
    },

    posts: {
      type: new GraphQLList(PostsType),
      resolve: (object, args, request) => {
        return db.any(sql.posts.getAll)
        .then(posts => posts)
        .catch(error => error);
      }
    }

  }

});

module.exports = QueryType;
