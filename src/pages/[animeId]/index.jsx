import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { apiBaseUrl } from '@/api/api';

import AnimeDetails from '@/components/features/AnimeDetails/AnimeDetails';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AnimeDetailPage = () => {
  const router = useRouter();
  const { animeId } = router.query;
  console.log(animeId);

  const {
    data: anime,
    error: animeError,
    isLoading: animeLoading,
  } = useSWR(
    animeId ? `${apiBaseUrl}/anime/${animeId}` : null,
    animeId ? fetcher : null
  );

  const {
    data: characters,
    error: charactersError,
    isLoading: charactersLoading,
  } = useSWR(
    animeId ? `${apiBaseUrl}/anime/${animeId}/characters` : null,
    animeId ? fetcher : null
  );

  if (animeError || charactersError) return 'An error has occurred.';
  if (animeLoading || charactersLoading) return 'Loading...';

  return (
    anime && (
      <Fragment>
        <Head>
          <title>Arima | Anime</title>
          <meta name="description" description="Anime details" />
        </Head>
        <AnimeDetails anime={anime.data} characters={characters.data} />
      </Fragment>
    )
  );
};

export default AnimeDetailPage;
