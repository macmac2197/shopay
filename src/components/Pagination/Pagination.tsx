import React from "react";

import "./Pagination.css";

interface IPagination {
  currentPage: number;
  onPageChange: (newPage: number) => void;
  itemsPerPage: number;
  data: Array<string | number | object>;
}

const Pagination: React.FC<IPagination> = (props: IPagination) => {
  const { currentPage, onPageChange, itemsPerPage, data } = props;

  const totalPages = Math.ceil(data.length / itemsPerPage); // compute the total pages

  return (
    <div className="pagination">
      <button
        className="page-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span className="page-text">{`Page ${currentPage} of ${totalPages}`}</span>

      <button
        className="page-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
