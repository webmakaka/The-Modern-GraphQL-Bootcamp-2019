import { GraphQLServer } from 'graphql-yoga';

// Demo user data

const USERS = [
  {
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
  }
];

const POSTS = [
  {
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
  },
  {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1'
  },
  {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: false,
    author: '2'
  }
];

const COMMENTS = [
  {
    id: '102',
    text: 'This worked well for me. Thnaks!'
  },
  {
    id: '103',
    text: 'Glad you enjoyed it.'
  },
  {
    id: '104',
    text: 'This did no work!'
  },
  {
    id: '105',
    text: 'Nevermind. I got it to work.'
  }
];

// Type definitions (schema)

const typeDefs = `
  type Query {
    users(query: String): [User!]!,
    posts(query: String): [Post!]!,
    comments(query: String): [Comment!]!,
    me: User!,
    post: Post!
  }

  type User {
    id: ID!,
    name: String!,
    email: String!,
    age: Int,
    posts: [Post!]!
  }

  type Post {
    id: ID!,
    title: String!,
    body: String!,
    published: Boolean!,
    author: User!
  }

  type Comment {
    id: ID!,
    text: String!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return USERS;
      }

      return USERS.filter(user => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return POSTS;
      }
      return POSTS.filter(post => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());

        const isBobyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());

        return isTitleMatch || isBobyMatch;
      });
    },
    comments(parent, args, ctx, info) {
      return COMMENTS;
    },
    me() {
      return {
        id: '123098',
        name: 'Mike',
        email: 'mike@example.com',
        age: 28
      };
    },
    post() {
      return {
        id: '092',
        title: 'GraphQL 101',
        body: '',
        published: false
      };
    }
  },
  Post: {
    author(parent, args, ctx, info) {
      return USERS.find(user => {
        return user.id === parent.author;
      });
    }
  },
  User: {
    posts(parent, args, ctx, info) {
      return POSTS.filter(post => {
        return post.author === parent.id;
      });
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
