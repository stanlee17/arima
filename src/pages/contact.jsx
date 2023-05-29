import { Fragment } from 'react';
import Head from 'next/head';
import Contact from '@/components/pages/Contact/Contact';

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Contact Me</title>
        <meta name="description" description="contact page" />
      </Head>
      <Contact />
    </Fragment>
  );
};

export default ContactPage;
