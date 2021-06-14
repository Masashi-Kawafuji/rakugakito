/* eslint-disable import/no-extraneous-dependencies */
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Prismic from '@prismicio/client';
import {
  PRISMIC_ENDPOINT,
  GRAPHQL_ENDPOINT,
  PRISMIC_ACCESS_TOKEN,
} from 'config';

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `Token ${PRISMIC_ACCESS_TOKEN}`,
  },
  useGETForQueries: true,
});

const prismicRefLink = setContext(async () => {
  const { refs } = await Prismic.getApi(PRISMIC_ENDPOINT);
  return {
    headers: {
      'Prismic-Ref': refs[0].ref,
    },
  };
});

const client = new ApolloClient({
  link: prismicRefLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
