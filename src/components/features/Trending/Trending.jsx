import styles from './Trending.module.scss';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

const Trending = ({ trending }) => {
  const data = trending.data;

  return (
    <Container>
      <div className={styles.trending}>
        <div className={styles.heading}>
          <h2>
            <span>T</span>rending
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

export default Trending;
