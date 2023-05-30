import Link from 'next/link';
import { Container } from 'react-bootstrap';

import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

import styles from './Upcoming.module.scss';

const Upcoming = ({ upcoming }) => {
  const data = upcoming.data;

  return (
    <Container>
      <div className={styles.upcoming}>
        <div className={styles.heading}>
          <h2>
            <span>U</span>pcoming
          </h2>
          <Link href="/upcoming" className={styles.viewAll}>
            View All
          </Link>
        </div>
        <AnimeCard data={data} numRow="6" />
      </div>
    </Container>
  );
};

export default Upcoming;
