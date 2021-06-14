/* eslint-disable import/no-extraneous-dependencies */
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Prismic from '@prismicio/client';
import { PRISMIC_ENDPOINT, GRAPHQL_ENDPOINT } from 'config';

const link = setContext(async (request, previousContext) => {
  const { refs } = await Prismic.getApi(PRISMIC_ENDPOINT);
  return {
    ...previousContext,
    headers: {
      'Prismic-Ref': refs[0].ref,
    },
  };
});

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  link,
  cache: new InMemoryCache(),
});

export default client;
