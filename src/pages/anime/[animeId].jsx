import { Fragment } from 'react';
import Head from 'next/head';
import { apiBaseUrl } from '@/api/api';
import AnimeDetails from '@/components/features/AnimeDetails/AnimeDetails';

const AnimeDetailPage = ({ anime, characters }) => {
  return (
    anime && (
      <Fragment>
        <Head>
          <title>Arima | {anime.data.title}</title>
          <meta name="description" description="Anime details" />
        </Head>
        <AnimeDetails anime={anime.data} characters={characters.data} />
      </Fragment>
    )
  );
};

export const getServerSideProps = async (context) => {
  const animeId = context.params.animeId;

  // Multiple fetching of Upcoming, Trending Anime
  const [animeRes, charactersRes] = await Promise.all([
    fetch(`${apiBaseUrl}/anime/${animeId}`),
    fetch(`${apiBaseUrl}/anime/${animeId}/characters`),
  ]);

  const [anime, characters] = await Promise.all([
    animeRes.json(),
    charactersRes.json(),
  ]);

  // Check if anime exist
  if (anime.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      anime,
      characters,
    },
  };
};

export default AnimeDetailPage;
