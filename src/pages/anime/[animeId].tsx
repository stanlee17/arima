import { Fragment } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { apiBaseUrl } from '@/api/api';
import AnimeDetails from '@/components/features/AnimeDetails/AnimeDetails';

interface AnimeDetailProps {
  anime: {
    data: {
      title: string;
      synopsis: string;
    };
  };
  characters: {
    data: any;
  };
}

const AnimeDetailPage = ({ anime, characters }: AnimeDetailProps) => {
  return (
    anime && (
      <Fragment>
        <Head>
          <title>Arima | {anime.data.title}</title>
          <meta name="description" content={anime.data.synopsis} key="desc" />
        </Head>
        <AnimeDetails anime={anime.data} characters={characters.data} />
      </Fragment>
    )
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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

  if (!animeRes.ok || !charactersRes.ok) {
    throw new Error(`Failed to fetch posts anime and or characters`);
  }

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
