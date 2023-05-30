import { useState } from 'react';
import { apiBaseUrl } from '@/api/api';
import axios from 'axios';
import styles from './Search.module.scss';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

const Search = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${apiBaseUrl}/anime?q=${search}&sfw=true`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      fetchData();
    }
  };

  console.log(data);

  return (
    <Container>
      <div className={styles.search}>
        <h3>Search Anime</h3>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Search Anime..."
            className={styles.input}
            onChange={handleSearchChange}
          />
        </Form>
        <AnimeCard data={data && data.data} />
      </div>
    </Container>
  );
};

export default Search;
