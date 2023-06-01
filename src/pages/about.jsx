import { Fragment } from 'react';
import Aqua from '@/../public/backgrounds/aqua.webp';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Head from 'next/head';
import About from '@/components/pages/About/About';

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | About Me</title>
        <meta name="description" description="About page" />
      </Head>
      <PageHeader
        heading="About Me"
        sub="A little introduction about myself"
        background={Aqua}
      />
      <About />
    </Fragment>
  );
};

export default AboutPage;
