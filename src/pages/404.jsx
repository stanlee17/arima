import { Fragment } from 'react';
import Head from 'next/head';
import NotFound from '@/components/pages/NotFound/NotFound';

const NotFoundPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | 404 Page Not Found</title>
        <meta
          name="description"
          description="
Oops! It seems like you've landed on a page that doesn't exist. Don't worry, we're here to help. Our 404 page on Arima ensures a seamless browsing experience, directing you back to the right path. Explore our vast collection of anime, discover new releases, and dive into captivating stories. Let us guide you back to the anime paradise you were looking for."
        />
      </Head>
      <NotFound />
    </Fragment>
  );
};

export default NotFoundPage;
