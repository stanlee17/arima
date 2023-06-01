import { Fragment } from 'react';
import Head from 'next/head';
import Ai from '@/../public/backgrounds/ai.webp';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Contact from '@/components/pages/Contact/Contact';

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Contact Me</title>
        <meta name="description" description="contact page" />
      </Head>
      <PageHeader
        heading="Contact Me"
        sub="Please leave a message for any inquiries or questions"
        background={Ai}
      />
      <Contact />
    </Fragment>
  );
};

export default ContactPage;
