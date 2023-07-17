import styles from './HighestRated.module.scss';
import { Container } from 'react-bootstrap';
import { useBetterMediaQuery } from '@/hooks/useBetterMediaQuery';
import Link from 'next/link';
import HighestRatedCard from '@/components/common/HighestRatedCard/HighestRatedCard';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

interface HighestRatedProps {
  highestRated: any;
}

const HighestRated = ({ highestRated }: HighestRatedProps) => {
  const isDesktopOrLaptop = useBetterMediaQuery('(min-width: 1224px)');
  const isTabletOrMobile = useBetterMediaQuery('(max-width: 1224px)');
  const data = highestRated?.data;

  return (
    <Container>
      <div className={styles.highestRated}>
        <div className={styles.heading}>
          <h2>Highest Rated</h2>
          <Link href="/highestRated" className={styles.viewAll}>
            View All
          </Link>
        </div>
        {isDesktopOrLaptop && <HighestRatedCard data={data} />}
        {isTabletOrMobile && <AnimeCard data={data} />}
      </div>
    </Container>
  );
};

export default HighestRated;
