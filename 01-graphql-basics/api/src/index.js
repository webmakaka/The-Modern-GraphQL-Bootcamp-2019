import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)

const typeDefs = `
  type Query {
    hello: String!,
    name: String!,
    location: String!,
    bio: String!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is my first query!';
    },
    name() {
      return 'Andrew Mead';
    },
    location() {
      return 'Philadelphia';
    },
    bio() {
      return 'I live in Philly and teach on Udemy!';
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('The server is up!');
});
