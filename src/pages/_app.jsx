import { Fragment } from 'react';
import Layout from '@/components/layout';
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </Fragment>
  );
}

export default App;
