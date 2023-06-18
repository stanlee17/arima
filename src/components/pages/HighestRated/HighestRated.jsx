import { useState, useContext, useRef } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import { PaginationContext } from '@/contexts/PaginationContext';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';
import Pagination from '@/components/common/Pagination/Pagination';
import paginate from '@/lib/pagination/paginate';
import styles from './HighestRated.module.scss';

const HighestRated = ({ data }) => {
  const [pageSize, setPageSize] = useState(10);
  const { currentPage, setCurrentPage } = useContext(PaginationContext);

  const router = useRouter();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`/highestRated?page=${page}`);
  };

  return (
    <Container>
      <div className={styles.highestRated}>
        <AnimeCard data={data.data} />
        <Pagination
          itemsCount={data.data.length} // 100
          currentPage={currentPage} // 1
          pageSize={pageSize} // 10
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
};

export default HighestRated;
