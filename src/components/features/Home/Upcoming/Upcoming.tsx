import Link from 'next/link';
import { Container } from 'react-bootstrap';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';
import styles from './Upcoming.module.scss';

interface UpcomingProps {
  upcoming: any;
}

const Upcoming = ({ upcoming }: UpcomingProps) => {
  const data = upcoming?.data;

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
        {data ? (
          <AnimeCard data={data} />
        ) : (
          <div>
            <p>Failed to fetch the data, please reload the page again.</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Upcoming;
