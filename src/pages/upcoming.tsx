import { Fragment } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { apiBaseUrl } from '@/api/api';
import Akane from '../../public/backgrounds/akane.webp';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import Upcoming from '@/components/pages/Upcoming/Upcoming';

interface UpcomingProps {
  data: any;
}

const UpcomingPage = ({ data }: UpcomingProps) => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Upcoming Anime</title>
        <meta
          name="description"
          content="Discover the latest upcoming anime releases, seasons and highly anticipated Anime series with Arima. Stay ahead of the anime curve and be the first to experience captivating stories and stunning animation."
          key="desc"
        />
      </Head>
      <PageHeader
        heading="Upcoming"
        sub="A complete list of upcoming Anime sorted by popularity"
        background={Akane}
      />
      <Upcoming data={data} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let res: any;
  if (query.page) {
    res = await fetch(
      `${apiBaseUrl}/seasons/upcoming?limit=24&sfw=true&page=${query.page}`
    );
  } else {
    res = await fetch(`${apiBaseUrl}/seasons/upcoming?limit=24&sfw=true`);
  }
  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      `Failed to fetch posts - Error ${res.status}: ${data.message}`
    );
  }

  return {
    props: {
      data,
    },
  };
};

export default UpcomingPage;
