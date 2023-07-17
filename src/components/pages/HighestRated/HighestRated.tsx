import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import { PaginationContext } from '@/contexts/PaginationContext';
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

interface CurrentPageProps {
  highestRated: number;
  upcoming: number;
  airing: number;
}

const HighestRated = ({ data }: HighestRatedProps) => {
  const { currentPage, setCurrentPage } = useContext(PaginationContext);
  const router = useRouter();
  const pageSize = data.pagination.items.per_page;
  const itemsCount = data.pagination.items.total;

  const handlePageChange = (page: number) => {
    setCurrentPage((prevState: CurrentPageProps) => {
      return {
        ...prevState,
        highestRated: page,
      };
    });
    router.push(`/highestRated?page=${page}`);
  };

  return (
    <Container>
      <div className={styles.highestRated}>
        <AnimeCard data={data.data} />
        <Pagination
          itemsCount={itemsCount}
          currentPage={router.query.page ? currentPage.highestRated : 1}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
};

export default HighestRated;
