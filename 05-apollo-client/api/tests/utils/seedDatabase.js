import bcrypt from 'bcryptjs';
import prisma from '../../src/prisma';

const seedDatabase = async () => {
  await prisma.mutation.deleteManyPosts();

  await prisma.mutation.deleteManyUsers();
  const user = await prisma.mutation.createUser({
    data: {
      name: 'Jen',
      email: 'jen@example.com',
      password: bcrypt.hashSync('Red098!@#$')
    }
  });

  await prisma.mutation.createPost({
    data: {
      title: 'My Published Post',
      body: 'My Published Post Body',
      published: true,
      author: {
        connect: {
          id: user.id
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
          id: user.id
        }
      }
    }
  });
};

export { seedDatabase as default };
