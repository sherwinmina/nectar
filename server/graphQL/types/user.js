// const {GraphQLObjectType, GraphQLString} = require('graphql');

// const UserType = new GraphQLObjectType({
//   name: 'User',
//   fields: {
//     username: {type: GraphQLString},
//     email: {type: GraphQLString},
//     id: {type: GraphQLString}
//   }
// });

const UserType = /* GraphQL */`
  type User {
    username: String
    email: String
    id: String
  }
`;


module.exports = UserType;
