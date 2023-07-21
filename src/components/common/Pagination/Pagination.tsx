import styles from './Pagination.module.scss';
import lodash from 'lodash';
import { IconType } from 'react-icons/lib';
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from 'react-icons/hi2';

interface PagesCutProps {
  pagesCount: number;
  pagesCutCount: number;
  currentPage: number;
}

interface PaginationItemProps {
  page: React.ReactNode;
  currentPage: number;
  onPageChange: (page: React.ReactNode) => void;
  isDisabled: boolean;
}

interface PaginationProps {
  itemsCount: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: React.ReactNode) => void;
}

const getPagesCut = ({
  pagesCount,
  pagesCutCount,
  currentPage,
}: PagesCutProps) => {
  const ceiling = Math.ceil(pagesCutCount / 2);
  const floor = Math.floor(pagesCutCount / 2);

  if (pagesCount < pagesCutCount) {
    return {
      start: 1,
      end: pagesCount + 1,
    };
  } else if (currentPage >= 1 && currentPage <= ceiling) {
    return { start: 1, end: pagesCutCount + 1 };
  } else if (currentPage + floor >= pagesCount) {
    return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
  } else {
    return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
  }
};

const PaginationItem = ({
  page,
  currentPage,
  onPageChange,
  isDisabled,
}: PaginationItemProps) => {
  function liClasses(
    page: React.ReactNode,
    currentPage: number,
    isDisabled: boolean
  ) {
    if (page === currentPage) return styles.pageItemActive;
    else if (isDisabled) return styles.pageItemDisabled;
    return styles.pageItem;
  }
  return (
    <li className={liClasses(page, currentPage, isDisabled)}>
      <button className={styles.pageLink} onClick={() => onPageChange(page)}>
        <span className={styles.pageLinkIcon}>{page}</span>
      </button>
    </li>
  );
};

const Pagination = ({
  itemsCount,
  currentPage,
  pageSize,
  onPageChange,
}: PaginationProps) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pagesCut = getPagesCut({ pagesCount, pagesCutCount: 5, currentPage });
  const pages = lodash.range(pagesCut.start, pagesCut.end);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;

  // Remove pagination if pagesCount is 1
  if (pagesCount === 1) return null;

  return (
    <nav className={styles.pageNav} aria-label="user pagination">
      <ul className={styles.pagination}>
        <PaginationItem
          page={<HiChevronDoubleLeft />}
          currentPage={currentPage}
          onPageChange={() => onPageChange(1)}
          isDisabled={isFirstPage}
        />
        <PaginationItem
          page={<HiChevronLeft />}
          currentPage={currentPage}
          onPageChange={() => onPageChange(currentPage - 1)}
          isDisabled={isFirstPage}
        />
        {pages.map((page) => (
          <PaginationItem
            key={page}
            page={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
            isDisabled={false}
          />
        ))}
        <PaginationItem
          page={<HiChevronRight />}
          currentPage={currentPage}
          onPageChange={() => onPageChange(currentPage + 1)}
          isDisabled={isLastPage}
        />
        <PaginationItem
          page={<HiChevronDoubleRight />}
          currentPage={currentPage}
          onPageChange={() => onPageChange(pagesCount)}
          isDisabled={isLastPage}
        />
      </ul>
    </nav>
  );
};

export default Pagination;
