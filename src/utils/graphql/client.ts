import { ApolloClient, InMemoryCache } from '@apollo/client';
import { PRISMIC_REF, PRISMIC_ACCESS_TOKEN } from 'config';

const client = new ApolloClient({
  uri: 'https://rakugakito.prismic.io/graphql',
  headers: {
    'Prismic-Ref': PRISMIC_REF,
    Authorization: `Token ${PRISMIC_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;
