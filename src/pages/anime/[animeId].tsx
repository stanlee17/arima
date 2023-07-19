import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '@/api/api';
import Spinners from '@/components/common/Spinners/Spinners';
import AnimeDetails from '@/components/features/AnimeDetails/AnimeDetails';

const AnimeDetailPage = () => {
  const router = useRouter();
  const { animeId } = router.query;

  const {
    data: anime,
    error: animeErr,
    isLoading: animeLoading,
  } = useSWR(animeId ? `/anime/${animeId}` : null, animeId ? fetcher : null);

  const {
    data: characters,
    error: charactersErr,
    isLoading: charactersLoading,
  } = useSWR(
    animeId ? `/anime/${animeId}/characters` : null,
    animeId ? fetcher : null
  );

  console.log(anime, characters);

  if (animeLoading || charactersLoading)
    return <Spinners loading={animeLoading || charactersLoading} />;

  if (animeErr || charactersErr)
    return <div>Couldnt retrieve data at this time</div>;

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

export default AnimeDetailPage;
