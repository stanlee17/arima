import { Fragment } from 'react';
import Head from 'next/head';
import Search from '@/components/pages/Search/Search';

const SearchPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Arima | Search Anime</title>
        <meta
          name="description"
          content="Search any anime that you want and it will give the exact Anime that you are looking for."
          key="desc"
        />
      </Head>
      <Search />
    </Fragment>
  );
};

export default SearchPage;
