import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from 'layout';
import Routes from 'routes';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
