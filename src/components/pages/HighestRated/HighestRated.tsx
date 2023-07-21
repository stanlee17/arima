import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import { useBetterMediaQuery } from '@/hooks/useBetterMediaQuery';
import HighestRatedCard from '@/components/common/HighestRatedCard/HighestRatedCard';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';
import Pagination from '@/components/common/Pagination/Pagination';
import styles from './HighestRated.module.scss';

interface HighestRatedProps {
  data: {
    pagination: {
      items: {
        per_page: number;
        total: number;
      };
    };
    data: any;
  };
}

const HighestRated = ({ data }: HighestRatedProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const isDesktopOrLaptop = useBetterMediaQuery('(min-width: 1224px)');
  const isTabletOrMobile = useBetterMediaQuery('(max-width: 1224px)');
  const router = useRouter();
  const pageSize = data.pagination.items.per_page;
  const itemsCount = data.pagination.items.total;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`/highestRated?page=${page}`);
  };

  useEffect(() => {
    if (router.query.page) {
      setCurrentPage(Number(router.query.page));
    }
  }, [router.query.page]);

  return (
    <Container>
      <div className={styles.highestRated}>
        {isDesktopOrLaptop && <HighestRatedCard data={data.data} />}
        {isTabletOrMobile && <AnimeCard data={data.data} />}
        <Pagination
          itemsCount={itemsCount}
          currentPage={router.query.page ? currentPage : 1}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
};

export default HighestRated;
