import { Fragment } from 'react';
import Head from 'next/head';
import Search from '@/components/pages/Search/Search';

const SearchPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Anime Search</title>
        <meta name="description" description="Search Anime" />
      </Head>
      <Search />
    </Fragment>
  );
};

export default SearchPage;
