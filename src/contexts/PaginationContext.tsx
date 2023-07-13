import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const PaginationContext = createContext(null);

interface PaginationProviderProps {
  children: React.ReactNode;
}

interface CurrentPageProps {
  highestRated: number;
  upcoming: number;
  airing: number;
}

const PaginationProvider = ({ children }: PaginationProviderProps) => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<CurrentPageProps>({
    highestRated: 1,
    upcoming: 1,
    airing: 1,
  });

  useEffect(() => {
    if (router.query.page) {
      setCurrentPage((prevState) => {
        return {
          ...prevState,
          highestRated: Number(router.query.page),
        };
      });
    }
  }, [router.query.page]);

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
