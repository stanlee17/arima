import { Fragment } from 'react';
import Head from 'next/head';
import Ruby from '../../public/backgrounds/ruby.webp';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Privacy from '@/components/pages/Privacy/Privacy';

const PrivacyPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Privacy Policy</title>
        <meta
          name="description"
          content="Please read our privacy policy carefully if you want to know what kind of information are we collecting from you if you sign up to our website."
          key="desc"
        />
      </Head>
      <PageHeader heading="Privacy Policy" sub background={Ruby} />
      <Privacy />
    </Fragment>
  );
};

export default PrivacyPage;
