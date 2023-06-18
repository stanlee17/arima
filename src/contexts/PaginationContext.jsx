import { createContext, useContext, useState } from 'react';

export const PaginationContext = createContext(null);

const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
