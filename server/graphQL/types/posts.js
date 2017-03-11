const {GraphQLObjectType, GraphQLString} = require('graphql');

const PostsType = new GraphQLObjectType({
  name: 'Posts',
  fields: {
    id: {type: GraphQLString},
    owner: {type: GraphQLString},
    title: {type: GraphQLString},
    content: {type: GraphQLString}
  }
});

module.exports = PostsType;
