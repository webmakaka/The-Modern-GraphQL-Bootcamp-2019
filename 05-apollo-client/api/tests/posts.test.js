import 'cross-fetch/polyfill'
import { gql } from 'apollo-boost'
import seeDatabase from './utils/seedDatabase';
import getClient from './utils/getClient';

const client = getClient();

beforeEach(seeDatabase)

test('Should expose published posts', async () => {
  const getPosts = gql`
      query {
          posts {
              id,
              title,
              body,
              published
          }
      }
  `;

  const response = await client.query({ query: getPosts});

  expect(response.data.posts.length).toBe(1);
  expect(response.data.posts[0].published).toBe(true)
});