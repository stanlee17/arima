import { Fragment } from 'react';
import Head from 'next/head';
import Memcho from '@/../public/backgrounds/memcho.webp';
import { apiBaseUrl } from '@/api/api';

// Import reuseable components
import PageHeader from '@/components/common/PageHeader/PageHeader';

// Import component pages
import HighestRated from '@/components/pages/HighestRated/HighestRated';

const HighestRatedPage = ({ data }) => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Highest Rated Anime</title>
        <meta
          name="description"
          content="A complete list of top-rated Anime. It will sort by rankings, meaning that the first anime on the list is the best of the best Anime of all time."
          key="desc"
        />
      </Head>
      <PageHeader
        heading="Highest Rated"
        sub="A list of the highest rated Anime of all time"
        background={Memcho}
      />
      <HighestRated data={data.data} />
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${apiBaseUrl}/top/anime?limit=24`);
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

export default HighestRatedPage;
