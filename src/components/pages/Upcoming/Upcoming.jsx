import { Container } from 'react-bootstrap';
import styles from './Upcoming.module.scss';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

const Upcoming = ({ data }) => {
  return (
    <Container>
      <div className={styles.upcoming}>
        <AnimeCard data={data} />
      </div>
    </Container>
  );
};

export default Upcoming;