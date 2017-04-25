const categoriesResolver = require('./categories.js');
const postsResolver = require('./posts.js');
const productsResolver = require('./products.js');
const userResolver = require('./user.js');

const Resolvers = {  
  Query(obj, args, context, info) {
    console.log(5);
  },
  Categories(obj, args, context, info) {
    console.log(5);
    return categoriesResolver();
  },
  Posts(obj, args, context, info) {
    console.log(5);
    return postsResolver();
  },
  Products(obj, args, context, info) {
    console.log(5);
    return productsResolver();
  },
  User(obj, args, context, info) {
    console.log(5);
    return userResolver(args.username);
  }
};

module.exports = Resolvers;
