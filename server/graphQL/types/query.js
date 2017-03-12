const {GraphQLString, GraphQLObjectType, GraphQLList} = require('graphql');
const UserType = require('./user.js');
const ProductsType = require('./products.js');
const PostsType = require('./posts.js');
const CategoriesType = require('./categories.js');
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
        .then(products => products.map((product) => {
          product.owner = product.username;
          return product;
        }))
        .catch(error => error);
      }
    },

    posts: {
      type: new GraphQLList(PostsType),
      resolve: (object, args, request) => {
        return db.any(sql.posts.getAll)
        .then(posts => posts.map((post) => {
          post.owner = post.username;
          return post;
        }))
        .catch(error => error);
      }
    },

    categories: {
      type: new GraphQLList(CategoriesType),
      resolve: (object, args, request) => {
        return db.any(sql.categories.getAll)
        .then(categories => categories.map((category) => {
          category.parentCategory = category.parenttitle;
          return category;
        }))
        .catch(error => error);
      }
    }

  }

});

module.exports = QueryType;
