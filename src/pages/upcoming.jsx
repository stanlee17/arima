import { Fragment } from 'react';
import Head from 'next/head';
import { apiBaseUrl } from '@/api/api';

import PageHeader from '@/components/common/PageHeader/PageHeader';
import Upcoming from '@/components/pages/Upcoming/Upcoming';

const UpcomingPage = ({ data }) => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Upcoming</title>
        <meta name="description" description="Upcoming Anime" />
      </Head>
      <PageHeader heading="Upcoming" sub="Upcoming anime next season" />
      <Upcoming data={data.data} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${apiBaseUrl}/seasons/upcoming`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default UpcomingPage;
