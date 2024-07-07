// JokesPagination.jsx

import React from 'react';
import styles from './JokesPagination.module.scss'; // Import SCSS module

const JokesPagination = ({ setCurrentPage, currentPage, jokes, jokesQuantity ,setIsSearchClicked}) => {
  const maxPage = 10;

  const handlePaginationNext = () => {
    if (currentPage < maxPage) {
      setCurrentPage(prev => prev + 1);
      setIsSearchClicked(true)
    }
  };

  const handlePaginationPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      setIsSearchClicked(true)
    }
  };

  const handleCurrentPageChange = (e) => {
    const newPage = Number(e.target.value);
    setCurrentPage(newPage);
    setIsSearchClicked(true)
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.paginationButton}
        onClick={handlePaginationPrevious}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>

      <div className={styles.selectContainer}>
        <select
          className={styles.selectBox}
          value={currentPage}
          onChange={handleCurrentPageChange}
        >
          {Array.from({ length: maxPage }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <button
        className={styles.paginationButton}
        onClick={handlePaginationNext}
        disabled={currentPage === maxPage || jokes.length < jokesQuantity}
      >
        Next Page
      </button>
    </div>
  );
};

export default JokesPagination;