const categoriesResolver = require('./categories.js');
const postsResolver = require('./posts.js');
const productsResolver = require('./products.js');
const userResolver = require('./user.js');

const Resolvers = {
  Query: {
    async categories(obj, args, context, info) {
      return await categoriesResolver();
    },
    async posts(obj, args, context, info) {
      return await postsResolver();
    },
    async products(obj, args, context, info) {
      return await productsResolver();
    },
    async user(obj, args, context, info) {
      return await userResolver(args.username);
    }
  }
};

module.exports = Resolvers;
