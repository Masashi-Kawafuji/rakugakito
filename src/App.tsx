import { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { AudioPlayerProvider } from 'contexts/AudioPlayerContext';
import client from 'utils/graphql/client';
import Layout from 'layout';
import Routes from 'routes';
import 'styles.css';

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <AudioPlayerProvider>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </AudioPlayerProvider>
    </ApolloProvider>
  );
};

export default App;
