const Post = {
  author(parent, args, { db }, info) {
    return db.USERS.find(user => {
      return user.id === parent.author;
    });
  },
  comments(parent, args, { db }, info) {
    return db.COMMENTS.filter(comment => {
      return comment.post === parent.id;
    });
  }
};

export { Post as default };
