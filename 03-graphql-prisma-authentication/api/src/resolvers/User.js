const User = {
  posts(parent, args, { db }, info) {
    return db.POSTS.filter(post => {
      return post.author === parent.id;
    });
  },
  comments(parent, args, { db }, info) {
    return db.COMMENTS.filter(comment => {
      return comment.author === parent.id;
    });
  }
};

export { User as default };
