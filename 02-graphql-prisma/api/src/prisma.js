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

// prisma.mutation
//   .updatePost({
//     where: {
//       id: 'ck69ming2002z0744utek6zy6'
//     },

//     data: {
//       body: 'This is how to get started with GraphQL...',
//       published: true
//     }
//   })
//   .then(() => {
//     return prisma.query.posts(null, '{ id, title, body, published  }');
//   })
//   .then(data => {
//     console.log(JSON.stringify(data, undefined, 2));
//   });

// //////////////////////////////////////////////////
// 13. Using AsyncAwait with Prisma Bindings
const createPostForUser = async (authorId, data) => {
  const post = await prisma.mutation.createPost(
    {
      data: {
        ...data,
        author: {
          connect: {
            id: authorId
          }
        }
      }
    },
    '{ id }'
  );
  const user = await prisma.query.user(
    {
      where: {
        id: authorId
      }
    },
    '{id, name, email, posts { id, title, body, published }}'
  );
  return user;
};

const updatePostForUser = async (postId, data) => {
  const post = await prisma.mutation.updatePost(
    {
      where: {
        id: postId
      },
      data
    },
    ' { author { id }}'
  );

  const user = await prisma.query.user(
    {
      where: {
        id: post.author.id
      }
    },
    '{ id, name, email, posts { id, title, published }}'
  );

  return user;
};

// createPostForUser('ck5lzwfh800n90838emq6q076', {
//   title: 'Great book to read',
//   body: 'The war of Art',
//   published: true
// }).then(user => {
//   console.log(JSON.stringify(user, undefined, 2));
// });

updatePostForUser('ck69nzpcc004q0744kgqnla3a', {
  published: false
}).then(user => {
  console.log(JSON.stringify(user, undefined, 2));
});

// //////////////////////////////////////////////////
