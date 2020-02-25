import 'cross-fetch/polyfill'
import prisma from '../src/prisma';
import seeDatabase, { userOne, userTwo, commentOne, commentTwo } from './utils/seedDatabase';
import getClient from './utils/getClient';
import { deleteComment } from './utils/operations'

const client = getClient();

beforeEach(seeDatabase)


test('Should delete own comment', async() => {
  const client = getClient(userOne.jwt);
  const variables = {
    id: commentTwo.comment.id
  };

  await client.mutate({
    mutation: deleteComment, variables
  });

  const exists = await prisma.exists.Comment({ id: commentTwo.comment.id })
  expect(exists).toBe(false);
});


test('Should not delete other users comment', async() => {
  const client = getClient(userOne.jwt);
  const variables = {
    id: commentOne.comment.id
  };

  await expect(
    client.mutate({ mutation: deleteComment, variables })
  ).rejects.toThrow();

});