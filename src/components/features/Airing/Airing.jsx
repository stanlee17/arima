import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Airing.module.scss';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

const Airing = ({ airing }) => {
  const data = airing.data;

  return (
    <Container>
      <div className={styles.airing}>
        <div className={styles.heading}>
          <h2>
            <span>A</span>iring
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

export default Airing;
