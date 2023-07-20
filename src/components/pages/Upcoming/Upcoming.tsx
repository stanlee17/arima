import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import styles from './Upcoming.module.scss';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';
import Pagination from '@/components/common/Pagination/Pagination';

interface UpcomingProps {
  data: any;
}

const Upcoming = ({ data }: UpcomingProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const router = useRouter();
  const pageSize = data.pagination.items.per_page;
  const itemsCount = data.pagination.items.total;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`/upcoming?page=${page}`);
  };

  useEffect(() => {
    if (router.query.page) {
      setCurrentPage(Number(router.query.page));
    }
  }, [router.query.page]);

  return (
    <Container>
      <div className={styles.upcoming}>
        <AnimeCard data={data.data} />
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

export default Upcoming;
