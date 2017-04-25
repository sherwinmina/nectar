// const {GraphQLObjectType, GraphQLString} = require('graphql');
//
// const CategoriesType = new GraphQLObjectType({
//   name: 'Categories',
//   fields: {
//     id: {type: GraphQLString},
//     title: {type: GraphQLString},
//     parentCategory: {type: GraphQLString}
//   }
// });

const CategoriesType = /* GraphQL */`
  type Categories {
    id: String
    title: String
    parentCategory: String
  }
`;


module.exports = CategoriesType;
