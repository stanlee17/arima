import styles from './HighestRated.module.scss';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

const HighestRated = ({ highestRated }) => {
  const data = highestRated.data;

  return (
    <Container>
      <div className={styles.highestRated}>
        <div className={styles.heading}>
          <h2>
            <span>H</span>ighest Rated
          </h2>
          <Link href="/highestRated" className={styles.viewAll}>
            View All
          </Link>
        </div>
        <AnimeCard data={data} numRow="6" />
      </div>
    </Container>
  );
};

export default HighestRated;
