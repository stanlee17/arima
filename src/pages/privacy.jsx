import { Fragment } from 'react';
import Head from 'next/head';
import Ruby from '@/../public/backgrounds/ruby.webp';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Privacy from '@/components/pages/Privacy/Privacy';

const PrivacyPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Privacy Policy</title>
        <meta name="description" description="privacy policy" />
      </Head>
      <PageHeader heading="Privacy Policy" background={Ruby} />
      <Privacy />
    </Fragment>
  );
};

export default PrivacyPage;
