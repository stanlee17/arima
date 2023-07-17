import styles from './HighestRated.module.scss';
import { Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import HighestRatedCard from '@/components/common/HighestRatedCard/HighestRatedCard';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';

interface HighestRatedProps {
  highestRated: any;
}

const HighestRated = ({ highestRated }: HighestRatedProps) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

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
        {isDesktopOrLaptop && <HighestRatedCard data={data} />}
        {isTabletOrMobile && <AnimeCard data={data} />}
      </div>
    </Container>
  );
};

export default HighestRated;
