import { Container } from 'react-bootstrap';
import styles from './AnimeDetails.module.scss';
import AnimeInfo from './AnimeInfo/AnimeInfo';
import AnimeContent from './AnimeContent/AnimeContent';

const AnimeDetails = ({ anime, characters }) => {
  return (
    anime && (
      <Container>
        <div className={styles.animeDetails}>
          <AnimeInfo anime={anime} />
          <AnimeContent anime={anime} characters={characters} />
        </div>
      </Container>
    )
  );
};

export default AnimeDetails;
