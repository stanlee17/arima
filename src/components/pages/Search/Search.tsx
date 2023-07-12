import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Search.module.scss';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

const Search = ({ anime }) => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const submitHandler = (e: any) => {
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
        <AnimeCard data={anime.data} />
      </div>
    </Container>
  );
};

export default Search;
