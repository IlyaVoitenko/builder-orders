import React from "react";

const PaginationDots = ({ totalPages, handlePageChange, currentPage }) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index + 1}
          onClick={() => {
            handlePageChange(index + 1);
          }}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationDots;
