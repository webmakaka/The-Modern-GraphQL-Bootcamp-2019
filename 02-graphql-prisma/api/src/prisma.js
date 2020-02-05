import { Prisma } from 'prisma-bindign';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'localhost:4466'
});
