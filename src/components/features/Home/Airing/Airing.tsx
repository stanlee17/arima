import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Airing.module.scss';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

interface AiringProps {
  airing: any;
}

const Airing = ({ airing }: AiringProps) => {
  const data = airing?.data;

  return (
    <Container>
      <div className={styles.airing} id="airing">
        <div className={styles.heading}>
          <h2>
            <span>A</span>iring
          </h2>
          <Link href="/airing" className={styles.viewAll}>
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

export default Airing;
