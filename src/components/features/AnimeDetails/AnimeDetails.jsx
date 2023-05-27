import { Container } from 'react-bootstrap';

import styles from './AnimeDetails.module.scss';

import AnimeInfo from './AnimeInfo/AnimeInfo';

const AnimeDetails = ({ data }) => {
  return (
    <Container>
      <div className={styles.animeDetails}>
        <AnimeInfo data={data} />
      </div>
    </Container>
  );
};

export default AnimeDetails;
