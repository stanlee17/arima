import { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import styles from './Search.module.scss';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { fetcher } from '@/api/api';
import Spinners from '@/components/common/Spinners/Spinners';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [search, setSearch] = useState('');

  const {
    data: anime,
    error,
    isLoading,
  } = useSWR(
    query ? `/anime?q=${query}&limit=24&sfw=true` : null,
    query ? fetcher : null
  );

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?query=${search}`);
  };

  return (
    <Container>
      <div className={styles.search}>
        <h3>Search Anime</h3>
        <Form className={styles.form} onSubmit={submitHandler}>
          <Form.Control
            type="text"
            placeholder="Search Anime..."
            className={styles.input}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
        {isLoading ? (
          <Spinners loading={isLoading} />
        ) : (
          <AnimeCard data={anime?.data} />
        )}
        {error && <div>Couldnt retrieve data at this time</div>}
      </div>
    </Container>
  );
};

export default Search;
