import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
});

// prisma.query
//   .users(null, '{ id, name, email, posts { id, title }  }')
//   .then(data => {
//     console.log(JSON.stringify(data, undefined, 2));
//   });

// prisma.query.comments(null, '{ id, text, author { id, name } }').then(data => {
//   console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: 'GraphQL 101!',
//         body: '',
//         published: false,
//         author: {
//           connect: {
//             id: 'ck5m0ub1a019u0838z2qtnjp6'
//           }
//         }
//       }
//     },
//     '{ id, title, body, published }'
//   )
//   .then(data => {
//     return prisma.query.users(
//       null,
//       '{ id, name, email, posts { id, title }  }'
//     );
//   })
//   .then(data => {
//     console.log(JSON.stringify(data, undefined, 2));
//   });

prisma.mutation
  .updatePost({
    where: {
      id: 'ck69ming2002z0744utek6zy6'
    },

    data: {
      body: 'This is how to get started with GraphQL...',
      published: true
    }
  })
  .then(() => {
    return prisma.query.posts(null, '{ id, title, body, published  }');
  })
  .then(data => {
    console.log(JSON.stringify(data, undefined, 2));
  });
