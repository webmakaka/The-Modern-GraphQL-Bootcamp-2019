const Comment = {
  author(parent, args, { db }, info) {
    return db.USERS.find(user => {
      return user.id === parent.author;
    });
  },
  post(parent, args, { db }, info) {
    return db.POSTS.find(post => {
      return post.id === parent.post;
    });
  }
};

export { Comment as default };
