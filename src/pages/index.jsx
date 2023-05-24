import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import Upcoming from '@/components/features/Upcoming/Upcoming';

import { apiBaseUrl } from '@/api/api';

const HomePage = ({ upcoming }) => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Home</title>
        <meta
          name="description"
          description="Browse the latest upcoming, airing, and popular anime"
        />
      </Head>
      <HeroSection />
      <Upcoming upcoming={upcoming} />
    </Fragment>
  );
};

export const getStaticProps = async (context) => {
  // Fetches Upcoming Anime
  const response = await fetch(`${apiBaseUrl}/seasons/upcoming?limit=5`);
  const upcoming = await response.json();

  return {
    props: {
      upcoming: upcoming,
    },
  };
};

export default HomePage;
