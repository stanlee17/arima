import { Fragment } from 'react';
import Head from 'next/head';
import NotFound from '@/components/pages/NotFound/NotFound';

const NotFoundPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | 404 Page Not Found</title>
        <meta name="description" description="404 Page Not Found" />
      </Head>
      <NotFound />
    </Fragment>
  );
};

export default NotFoundPage;
