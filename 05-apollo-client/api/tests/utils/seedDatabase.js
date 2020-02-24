import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../src/prisma';

const userOne = {
  input: {
    name: 'Jen',
    email: 'jen@example.com',
    password: bcrypt.hashSync('Red098!@#$')
  },
  user: undefined,
  jwt: undefined
};

const seedDatabase = async () => {
  await prisma.mutation.deleteManyPosts();
  await prisma.mutation.deleteManyUsers();

  userOne.user = await prisma.mutation.createUser({
    data: userOne.input
  });

  userOne.jwt = jwt.sign(
    {
      userId: userOne.user.id
    },
    process.env.JWT_SECRET
  );

  await prisma.mutation.createPost({
    data: {
      title: 'My Published Post',
      body: 'My Published Post Body',
      published: true,
      author: {
        connect: {
          id: userOne.user.id
        }
      }
    }
  });

  await prisma.mutation.createPost({
    data: {
      title: 'My Draft Post',
      body: 'My Draft Post Body',
      published: false,
      author: {
        connect: {
          id: userOne.user.id
        }
      }
    }
  });
};

export { seedDatabase as default, userOne };
