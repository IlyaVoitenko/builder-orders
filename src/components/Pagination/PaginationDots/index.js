import React from "react";
import { goToTop } from "./helper";

const PaginationDots = ({ totalPages, handlePageChange, currentPage }) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index + 1}
          onClick={() => {
            handlePageChange(index + 1);
            goToTop();
          }}
          className={
            currentPage === index + 1
              ? "active bg-blue-500 text-white pr-2 pl-2  rounded-md not-italic"
              : "pr-2 pl-2 not-italic"
          }
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationDots;
