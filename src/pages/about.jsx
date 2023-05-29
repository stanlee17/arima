import { Fragment } from 'react';
import Head from 'next/head';

import About from '@/components/pages/About/About';

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | About Me</title>
        <meta name="description" description="about page" />
      </Head>
      <About />
    </Fragment>
  );
};

export default AboutPage;
