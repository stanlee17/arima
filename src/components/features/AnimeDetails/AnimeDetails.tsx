import { Container } from 'react-bootstrap';
import styles from './AnimeDetails.module.scss';
import AnimeInfo from './AnimeInfo/AnimeInfo';
import AnimeContent from './AnimeContent/AnimeContent';

interface AnimeDetailsProps {
  anime: any;
  characters: any;
}

const AnimeDetails = ({ anime, characters }: AnimeDetailsProps) => {
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
