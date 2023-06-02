import { Fragment } from 'react';
import Head from 'next/head';
import { apiBaseUrl } from '@/api/api';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import HighestRated from '@/components/features/Home/HighestRated/HighestRated';
import Airing from '@/components/features/Home/Airing/Airing';
import Upcoming from '@/components/features/Home/Upcoming/Upcoming';

const HomePage = ({ upcoming, highestRated, airing }) => {
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
        <Airing airing={airing} />
        <Upcoming upcoming={upcoming} />
        <HighestRated highestRated={highestRated} />
      </div>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  // Multiple fetching of Upcoming, Trending Anime
  const [upcomingRes, highestRatedRes, airingRes] = await Promise.all([
    fetch(`${apiBaseUrl}/seasons/upcoming?limit=6`),
    fetch(`${apiBaseUrl}/top/anime?limit=6`),
    fetch(`${apiBaseUrl}/seasons/now?limit=6`),
  ]);
  const [upcoming, highestRated, airing] = await Promise.all([
    upcomingRes.json(),
    highestRatedRes.json(),
    airingRes.json(),
  ]);

  return {
    props: {
      upcoming,
      highestRated,
      airing,
    },
    revalidate: 60 * 10,
  };
};

export default HomePage;
