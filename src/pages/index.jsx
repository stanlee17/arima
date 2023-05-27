import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';

import Trending from '@/components/features/Trending/Trending';
import Airing from '@/components/features/Airing/Airing';
import Upcoming from '@/components/features/Upcoming/Upcoming';

import { apiBaseUrl } from '@/api/api';

const HomePage = ({ upcoming, trending, airing }) => {
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
      <div className="py-5">
        <Trending trending={trending} />
        <Airing airing={airing} />
        <Upcoming upcoming={upcoming} />
      </div>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  // Multiple fetching of Upcoming, Trending Anime
  const [upcomingRes, trendingRes, airingRes] = await Promise.all([
    fetch(`${apiBaseUrl}/seasons/upcoming?limit=6`),
    fetch(`${apiBaseUrl}/top/anime?limit=6&filter=airing`),
    fetch(`${apiBaseUrl}/seasons/now?limit=6`),
  ]);
  const [upcoming, trending, airing] = await Promise.all([
    upcomingRes.json(),
    trendingRes.json(),
    airingRes.json(),
  ]);

  return {
    props: {
      upcoming,
      trending,
      airing,
    },
  };
};

export default HomePage;
