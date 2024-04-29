import React, { useEffect, useState } from "react";

const Pagination = ({ currentPage }) => {
  const totalPages = 15;
  const pagesToShow = 5;

  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState([]);

  const getPages = () => {
    let startingPage;
    if (activePage < 3) startingPage = 1;
    else if (activePage >= 13) startingPage = totalPages - pagesToShow + 1;
    else startingPage = activePage - 2;

    const resultPagesArray = [...Array(pagesToShow)].map((_, index) => {
      return startingPage + index;
    });
    console.log(startingPage, resultPagesArray);
    return resultPagesArray;
  };

  const handlePages = (e) => {
    let selectPagenumber;
    if (e.target.dataset.page === "Prev") selectPagenumber = activePage - 1;
    else if (e.target.dataset.page === "Next")
      selectPagenumber = activePage + 1;
    else selectPagenumber = Number(e.target.dataset.page);

    setActivePage(selectPagenumber);
    currentPage(selectPagenumber);
  };

  useEffect(() => {
    setPages(getPages(activePage, totalPages, pagesToShow));
  }, [activePage, totalPages, pagesToShow]);

  return (
    <div className="text-white flex gap-2 justify-center py-10">
      <button
        className="px-5 py-3 hover:bg-gray-700 bg-slate-400"
        data-page="Prev"
        disabled={activePage === 1}
        onClick={handlePages}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          className={`px-5 py-3 hover:bg-slate-400 ${
            activePage === page ? "bg-slate-400" : "bg-gray-700"
          }`}
          data-page={page}
          onClick={handlePages}
        >
          {page}
        </button>
      ))}
      <button
        className="px-5 py-3 bg-slate-400 hover:bg-gray-700"
        data-page="Next"
        disabled={activePage === totalPages}
        onClick={handlePages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
