import { Container } from 'react-bootstrap';
import styles from './HighestRated.module.scss';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

const HighestRated = ({ data }) => {
  return (
    <Container>
      <div className={styles.highestRated}>
        <AnimeCard data={data} numRow="5" />
      </div>
    </Container>
  );
};

export default HighestRated;
