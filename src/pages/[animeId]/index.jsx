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

  const { data, error, isLoading } = useSWR(
    animeId ? `${apiBaseUrl}/anime/${animeId}/full` : null,
    animeId ? fetcher : null
  );

  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading...';

  console.log(data);

  return (
    data && (
      <Fragment>
        <Head>
          <title>Arima | Anime</title>
          <meta name="description" description="Anime details" />
        </Head>
        <AnimeDetails data={data.data} />
      </Fragment>
    )
  );
};

export default AnimeDetailPage;
