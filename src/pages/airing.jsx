import { Fragment } from 'react';
import Head from 'next/head';
import { apiBaseUrl } from '@/api/api';
import KanaArima from '@/../public/backgrounds/kana_arima.webp';

// Import reuseable components
import PageHeader from '@/components/common/PageHeader/PageHeader';

// Import pages components
import Airing from '@/components/pages/Airing/Airing';

const AiringPage = ({ data }) => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Currenty Airing Anime</title>
        <meta
          name="description"
          content="Discover the currently airing Anime on Arima. Navigate through this page and find your newly favorited Anime that are airing this season, or find the new hidden gem Anime that you are looking to watch."
          key="desc"
        />
      </Head>
      <PageHeader
        heading="Currently Airing"
        sub="Currently airing anime this season"
        background={KanaArima}
      />
      <Airing data={data.data} />
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${apiBaseUrl}/seasons/now?limit=24`);
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

export default AiringPage;
