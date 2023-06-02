import { Fragment } from 'react';
import Head from 'next/head';
import { apiBaseUrl } from '@/api/api';
import Akane from '@/../public/backgrounds/akane.webp';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Upcoming from '@/components/pages/Upcoming/Upcoming';

const UpcomingPage = ({ data }) => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Upcoming</title>
        <meta name="description" description="Upcoming Anime" />
      </Head>
      <PageHeader
        heading="Upcoming"
        sub="Upcoming anime next season"
        background={Akane}
      />
      <Upcoming data={data.data} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${apiBaseUrl}/seasons/upcoming?limit=24`);
  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(
      `Failed to fetch posts - Error ${res.status}: ${data.message}`
    );
  }

  return {
    props: {
      data,
    },
    revalidate: 60 * 10,
  };
};

export default UpcomingPage;
