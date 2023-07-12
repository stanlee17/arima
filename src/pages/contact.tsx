import { Fragment } from 'react';
import Head from 'next/head';
import Ai from '../../public/backgrounds/ai.webp';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Contact from '@/components/pages/Contact/Contact';

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with us. Reach out for inquiries, feedback or collaborations. We value of input and are ready to assist you on any matter."
          key="desc"
        />
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
