import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
});

prisma.query
  .users(null, '{ id, name, email, posts { id, title }  }')
  .then(data => {
    console.log(JSON.stringify(data, undefined, 2));
  });

prisma.query.comments(null, '{ id, text, author { id, name } }').then(data => {
  console.log(JSON.stringify(data, undefined, 2));
});
