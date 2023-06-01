import { Fragment } from 'react';
import Head from 'next/head';
import { apiBaseUrl } from '@/api/api';
import KanaArima from '@/../public/backgrounds/arima_kana.jpg';

// Import reuseable components
import PageHeader from '@/components/common/PageHeader/PageHeader';

// Import pages components
import Airing from '@/components/pages/Airing/Airing';

const AiringPage = ({ data }) => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Airing</title>
        <meta name="description" description="Airing anime" />
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

export const getStaticProps = async () => {
  const res = await fetch(`${apiBaseUrl}/seasons/now?limit=24`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default AiringPage;
