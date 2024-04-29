import React, { useEffect } from "react";
import Header from "../component/Header";
import Card from "../component/Card";
import { useDispatch, useSelector } from "react-redux";
import { setMovieData } from "../reducers/MovieReducer";
import Footer from "../component/Footer";
import SearchOverlay from "../component/SearchOverlay";
import Pagination from "../component/Pagination";

const Browse = () => {
  const dispatch = useDispatch();

  const fetchData = (pageNumber) =>
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=66da3d7d02515244f65a84cfb6cd4c72&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(setMovieData(res.results));
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    fetchData(1);
  }, []);

  const movies = useSelector((state) => state.moviedata.movies);
  const searchKeyword = useSelector((state) => state.searchText.searchText);

  return (
    <div className="w-screen h-fit bg-black">
      <Header />
      {searchKeyword ? <SearchOverlay /> : null}

      <div className="p-10">
        <h1 className="text-left text-white text-5xl font-extrabold ">
          What to Watch - IMDb
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 mt-4">
          {movies?.map((movie, index) => (
            <Card key={index} info={movie} />
          ))}
        </div>
      </div>
      <Pagination currentPage={fetchData} />
      <Footer />
    </div>
  );
};

export default Browse;
