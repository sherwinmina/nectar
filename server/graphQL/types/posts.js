// const {GraphQLObjectType, GraphQLString} = require('graphql');
//
// const PostsType = new GraphQLObjectType({
//   name: 'Posts',
//   fields: {
//     id: {type: GraphQLString},
//     owner: {type: GraphQLString},
//     title: {type: GraphQLString},
//     content: {type: GraphQLString}
//   }
// });

const PostsType = /* GraphQL */`
  type Posts {
    id: String
    owner: String
    titile: String
    content: String
  }
`;

module.exports = PostsType;
