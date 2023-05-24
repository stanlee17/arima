import { Fragment } from 'react';
import Layout from '@/components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default App;
