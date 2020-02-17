import jwt from 'jsonwebtoken';

export const getUserId = request => {
  const header = request.request.headers.authorization;

  if (!header) {
    throw new Error('Authentication required!');
  }

  const token = header.replace('Bearer ', '');

  const decoded = jwt.verify(token, 'this_is_a_secret');

  return decoded.userId;
};
