const {GraphQLObjectType, GraphQLString} = require('graphql');

const ProductsType = new GraphQLObjectType({
  name: 'Products',
  fields: {
    id: GraphQLString,
    owner: GraphQLString,
    category: GraphQLString,
    subcategory: GraphQLString,
    type: GraphQLString,
    title: GraphQLString,
    description: GraphQLString,
    price: GraphQLString,
    inStock: GraphQLString
  }
});

module.exports = ProductsType;
