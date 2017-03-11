const {GraphQLObjectType, GraphQLString} = require('graphql');

const ProductsType = new GraphQLObjectType({
  name: 'Products',
  fields: {
    id: {type: GraphQLString},
    owner: {type: GraphQLString},
    category: {type: GraphQLString},
    subcategory: {type: GraphQLString},
    type: {type: GraphQLString},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
    price: {type: GraphQLString},
    inStock: {type: GraphQLString}
  }
});

module.exports = ProductsType;
