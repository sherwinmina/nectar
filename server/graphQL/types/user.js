const {GraphQLObjectType, GraphQLString} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    username: {type: GraphQLString},
    email: {type: GraphQLString},
    id: {type: GraphQLString}
  }
});


module.exports = UserType;
