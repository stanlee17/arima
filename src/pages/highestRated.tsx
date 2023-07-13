import { Fragment } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Memcho from '../../public/backgrounds/memcho.webp';
import { apiBaseUrl } from '@/api/api';
import PageHeader from '@/components/common/PageHeader/PageHeader';
import HighestRated from '@/components/pages/HighestRated/HighestRated';

interface HighestRatedProps {
  data: any;
}

const HighestRatedPage = ({ data }: HighestRatedProps) => {
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
        sub="Top 100 of the highest rated Anime of all time"
        background={Memcho}
      />
      <HighestRated data={data} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let res: any;

  // CONDITIONAL: Fetch new data if page query exist, otherwise fetch the first top 20 anime
  if (query.page) {
    res = await fetch(
      `${apiBaseUrl}/top/anime?limit=20&sfw=true&page=${query.page}`
    );
  } else {
    res = await fetch(`${apiBaseUrl}/top/anime?limit=20&sfw=true`);
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

export default HighestRatedPage;
