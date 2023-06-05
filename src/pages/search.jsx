import { Fragment, useState } from 'react';
import Head from 'next/head';
import { apiBaseUrl } from '@/api/api';
import Search from '@/components/pages/Search/Search';

const SearchPage = ({ anime }) => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Search Anime</title>
        <meta
          name="description"
          description="Search any anime that you want and it will give the exact Anime that you are looking for."
        />
      </Head>
      <Search anime={anime} />
    </Fragment>
  );
};

export const getServerSideProps = async ({ query }) => {
  const res = await fetch(
    `${apiBaseUrl}/anime?q=${query.query}&limit=24&sfw=true`
  );
  const json = await res.json();
  const anime = json;

  return {
    props: {
      anime,
    },
  };
};

export default SearchPage;
