import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import styles from './Airing.module.scss';
import { PaginationContext } from '@/contexts/PaginationContext';
import AnimeCard from '@/components/common/AnimeCard/AnimeCard';
import Pagination from '@/components/common/Pagination/Pagination';

const Airing = ({ data }) => {
  const { currentPage, setCurrentPage } = useContext(PaginationContext);
  const router = useRouter();
  const pageSize = data.pagination.items.per_page;
  const itemsCount = data.pagination.items.total;

  const handlePageChange = (page) => {
    setCurrentPage((prevState) => {
      return {
        ...prevState,
        airing: page,
      };
    });
    router.push(`/airing?page=${page}`);
  };

  return (
    <Container>
      <div className={styles.airing}>
        <AnimeCard data={data.data} />
        <Pagination
          itemsCount={itemsCount}
          currentPage={router.query.page ? currentPage.airing : 1}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
};

export default Airing;
