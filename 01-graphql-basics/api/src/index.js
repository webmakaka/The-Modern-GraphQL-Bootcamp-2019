import { GraphQLServer } from 'graphql-yoga';
import uuidv4 from 'uuid/v4';

// Demo user data

let USERS = [
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

let POSTS = [
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

let COMMENTS = [
  {
    id: '102',
    text: 'This worked well for me. Thanks!',
    author: '3',
    post: '10'
  },
  {
    id: '103',
    text: 'Glad you enjoyed it.',
    author: '1',
    post: '10'
  },
  {
    id: '104',
    text: 'This did no work!',
    author: '2',
    post: '11'
  },
  {
    id: '105',
    text: 'Nevermind. I got it to work.',
    author: '1',
    post: '11'
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

  type Mutation {
    createUser(data: CreateUserInput!): User!,
    deleteUser(id: ID!): User!,
    createPost(data: CreatePostInput!):Post!,
    deletePost(id: ID!): Post!,
    createComment(data: CreateCommentInput!):Comment!,
    deleteComment(id: ID!): Comment!,
  }

  input CreateUserInput {
    name: String!, 
    email: String!, 
    age: Int
  }

  input CreatePostInput {
    title: String!, 
    body:String!, 
    published: Boolean!, 
    author: ID!
  }

  input CreateCommentInput {
    text: String!, 
    author: ID!, 
    post: ID!
  }

  type User {
    id: ID!,
    name: String!,
    email: String!,
    age: Int,
    posts: [Post!]!,
    comments: [Comment!]!
  }

  type Post {
    id: ID!,
    title: String!,
    body: String!,
    published: Boolean!,
    author: User!,
    comments: [Comment!]!
  }

  type Comment {
    id: ID!,
    text: String!,
    author: User!,
    post: Post!
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

        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());

        return isTitleMatch || isBodyMatch;
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
  Mutation: {
    createUser(parent, args, ctx, info) {
      const emailTaken = USERS.some(user => user.email === args.data.email);

      if (emailTaken) {
        throw new Error('Email taken');
      }

      const user = {
        id: uuidv4(),
        ...args.data
      };

      USERS.push(user);

      return user;
    },
    deleteUser(parent, args, ctx, info) {
      const userIndex = USERS.findIndex(user => user.id === args.id);

      if (userIndex === -1) {
        throw new Error('User not found');
      }

      const deletedUsers = USERS.splice(userIndex, 1);

      POSTS = POSTS.filter(post => {
        const match = post.author === args.id;

        if (match) {
          COMMENTS = COMMENTS.filter(comment => comment.post != post.id);
        }

        return !match;
      });

      COMMENTS = COMMENTS.filter(comment => comment.author !== args.id);

      return deletedUsers[0];
    },
    createPost(parent, args, ctx, info) {
      const userExists = USERS.some(user => user.id === args.data.author);

      if (!userExists) {
        throw new Error('User not found!');
      }

      const post = {
        id: uuidv4(),
        ...args.data
      };

      POSTS.push(post);

      return post;
    },
    deletePost(parent, args, ctx, info) {
      const postIndex = POSTS.findIndex(post => post.id === args.id);

      if (postIndex === -1) {
        throw new Error('Post not found!');
      }

      const deletedPosts = POSTS.splice(postIndex, 1);

      COMMENTS = COMMENTS.filter(comment => comment.post !== args.id);

      return deletedPosts[0];
    },
    createComment(parent, args, ctx, info) {
      const userExists = USERS.some(user => user.id === args.data.author);
      const postExists = POSTS.some(
        post => post.id === args.data.post && post.published
      );

      if (!userExists || !postExists) {
        throw new Error('Unable to find user and post!');
      }

      const comment = {
        id: uuidv4(),
        ...args.data
      };

      COMMENTS.push(comment);

      return comment;
    },
    deleteComment(parent, args, ctx, info) {
      const commentIndex = COMMENTS.findIndex(
        comment => comment.id === args.id
      );

      if (commentIndex === -1) {
        throw new Error('Comment not found!');
      }

      const deletedComments = COMMENTS.splice(commentIndex, 1);

      return deletedComments[0];
    }
  },
  Post: {
    author(parent, args, ctx, info) {
      return USERS.find(user => {
        return user.id === parent.author;
      });
    },
    comments(parent, args, ctx, info) {
      return COMMENTS.filter(comment => {
        return comment.post === parent.id;
      });
    }
  },
  Comment: {
    author(parent, args, ctx, info) {
      return USERS.find(user => {
        return user.id === parent.author;
      });
    },
    post(parent, args, ctx, info) {
      return POSTS.find(post => {
        return post.id === parent.post;
      });
    }
  },
  User: {
    posts(parent, args, ctx, info) {
      return POSTS.filter(post => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, ctx, info) {
      return COMMENTS.filter(comment => {
        return comment.author === parent.id;
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
