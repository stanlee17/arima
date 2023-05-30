import { Fragment } from 'react';
import Head from 'next/head';
import Privacy from '@/components/pages/Privacy/Privacy';

const PrivacyPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Privacy Policy</title>
        <meta name="description" description="privacy policy" />
      </Head>
      <Privacy />
    </Fragment>
  );
};

export default PrivacyPage;
