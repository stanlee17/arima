import { Container } from 'react-bootstrap';
import styles from './Airing.module.scss';

import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

const Airing = ({ data }) => {
  return (
    <Container>
      <div className={styles.airing}>
        <AnimeCard data={data} numRow="5" />
      </div>
    </Container>
  );
};

export default Airing;
