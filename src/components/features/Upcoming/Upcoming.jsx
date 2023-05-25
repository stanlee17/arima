import Link from 'next/link';
import { Container } from 'react-bootstrap';

import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

import styles from './Upcoming.module.scss';

const Upcoming = ({ upcoming }) => {
  const data = upcoming.data;
  console.log(data);

  return (
    <Container>
      <div className={styles.upcoming}>
        <div className={styles.heading}>
          <h2>
            <span>U</span>pcoming
          </h2>
          <Link href="/search" className={styles.viewAll}>
            View All
          </Link>
        </div>
        <AnimeCard data={data} />
      </div>
    </Container>
  );
};

export default Upcoming;
