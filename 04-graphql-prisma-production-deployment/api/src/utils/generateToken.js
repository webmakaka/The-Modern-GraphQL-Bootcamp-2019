import jwt from 'jsonwebtoken';

export const generateToken = userId => {
  return jwt.sign(
    {
      userId
    },
    'this_is_a_secret',
    { expiresIn: '14 days' }
  );
};
