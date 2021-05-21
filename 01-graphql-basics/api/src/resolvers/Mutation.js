import { v4 as uuidv4 } from 'uuid';

export const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.USERS.some((user) => user.email === args.data.email);

    if (emailTaken) {
      throw new Error('Email taken');
    }

    const user = {
      id: uuidv4(),
      ...args.data,
    };

    db.USERS.push(user);

    return user;
  },
  deleteUser(parent, args, { db }, info) {
    const userIndex = db.USERS.findIndex((user) => user.id === args.id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const deletedUsers = db.USERS.splice(userIndex, 1);

    db.POSTS = db.POSTS.filter((post) => {
      const match = post.author === args.id;

      if (match) {
        db.COMMENTS = db.COMMENTS.filter((comment) => comment.post != post.id);
      }

      return !match;
    });

    db.COMMENTS = db.COMMENTS.filter((comment) => comment.author !== args.id);

    return deletedUsers[0];
  },
  updateUser(parent, args, { db }, info) {
    const { id, data } = args;
    const user = db.USERS.find((user) => user.id === id);

    if (!user) {
      throw new Error('User not found!');
    }

    if (typeof data.email === 'string') {
      const emailTaken = db.USERS.some((user) => user.email === data.email);

      if (emailTaken) {
        throw new Error('Email taken!');
      }
    }

    user.email = data.email;

    if (typeof data.name === 'string') {
      user.name = data.name;
    }

    if (typeof data.age !== 'undefined') {
      user.age = data.age;
    }

    return user;
  },

  createPost(parent, args, { db, pubsub }, info) {
    const userExists = db.USERS.some((user) => user.id === args.data.author);

    if (!userExists) {
      throw new Error('User not found!');
    }

    const post = {
      id: uuidv4(),
      ...args.data,
    };

    db.POSTS.push(post);

    if (args.data.published) {
      pubsub.publish('post', {
        post: {
          mutation: 'CREATED',
          data: post,
        },
      });
    }

    return post;
  },
  deletePost(parent, args, { db, pubsub }, info) {
    const postIndex = db.POSTS.findIndex((post) => post.id === args.id);

    if (postIndex === -1) {
      throw new Error('Post not found!');
    }

    const [post] = db.POSTS.splice(postIndex, 1);

    db.COMMENTS = db.COMMENTS.filter((comment) => comment.post !== args.id);

    if (post.published) {
      pubsub.publish('post', {
        post: {
          mutation: 'DELETED',
          data: post,
        },
      });
    }

    return post;
  },
  updatePost(parent, args, { db, pubsub }, info) {
    const { id, data } = args;

    const post = db.POSTS.find((post) => post.id === id);

    const originalPost = { ...post };

    if (!post) {
      throw new Error('Post not found!');
    }

    if (typeof data.title === 'string') {
      post.title = data.title;
    }

    if (typeof data.body === 'string') {
      post.body = data.body;
    }

    if (typeof data.published === 'boolean') {
      post.published = data.published;

      if (originalPost.published && !post.published) {
        pubsub.publish('post', {
          post: {
            mutation: 'DELETED',
            data: originalPost,
          },
        });
      } else if (!originalPost.published && post.published) {
        pubsub.publish('post', {
          post: {
            mutation: 'CREATED',
            data: post,
          },
        });
      }
    } else if (post.published) {
      pubsub.publish('post', {
        post: {
          mutation: 'UPDATED',
          data: post,
        },
      });
    }

    return post;
  },

  createComment(parent, args, { db, pubsub }, info) {
    const userExists = db.USERS.some((user) => user.id === args.data.author);
    const postExists = db.POSTS.some(
      (post) => post.id === args.data.post && post.published
    );

    if (!userExists || !postExists) {
      throw new Error('Unable to find user and post!');
    }

    const comment = {
      id: uuidv4(),
      ...args.data,
    };

    db.COMMENTS.push(comment);

    pubsub.publish(`comment ${args.data.post}`, {
      comment: {
        mutation: 'CREATED',
        data: comment,
      },
    });

    return comment;
  },
  deleteComment(parent, args, { db, pubsub }, info) {
    const commentIndex = db.COMMENTS.findIndex(
      (comment) => comment.id === args.id
    );

    if (commentIndex === -1) {
      throw new Error('Comment not found!');
    }

    const [deletedComment] = db.COMMENTS.splice(commentIndex, 1);

    pubsub.publish(`comment ${deletedComment.post}`, {
      comment: {
        mutation: 'DELETED',
        data: deletedComment,
      },
    });

    return deletedComment;
  },
  updateComment(parent, args, { db, pubsub }, info) {
    const { id, data } = args;
    const comment = db.COMMENTS.find((comment) => comment.id === id);

    if (!comment) {
      throw new Error('Comment not found!');
    }

    if (typeof data.text === 'string') {
      comment.text = data.text;
    }

    pubsub.publish(`comment ${comment.post}`, {
      comment: {
        mutation: 'UPDATED',
        data: comment,
      },
    });

    return comment;
  },
};
