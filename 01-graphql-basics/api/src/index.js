import { ApolloServer, PubSub } from 'apollo-server-express';
import express from 'express';
import { readFileSync } from 'fs';
import { db } from './db.js';
import { Comment } from './resolvers/Comment.js';
import { Mutation } from './resolvers/Mutation.js';
import { Post } from './resolvers/Post.js';
import { Query } from './resolvers/Query.js';
import { Subscription } from './resolvers/Subscription.js';
import { User } from './resolvers/User.js';

const app = express();

const typeDefs = readFileSync('./src/schema.graphql', 'UTF-8');

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription,
    Post,
    User,
    Comment,
  },
  context: {
    db,
    pubsub,
  },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(
    `GraphQL Server running at http://localhost:4000${server.graphqlPath}`
  )
);
