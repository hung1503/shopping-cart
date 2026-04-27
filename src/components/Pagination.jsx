import React from "react";

export const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="isolate flex justify-center items-center">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-blue-500 focus:z-20 focus:outline-offset-0 ${currentPage === page ? "bg-blue-600 text-white" : "bg-white"}`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
