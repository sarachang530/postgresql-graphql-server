const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

const QueryRoot = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello World!',
    },
  }),
});

const schema = new GraphQLSchema({
  query: QueryRoot,
});

module.exports = schema;
