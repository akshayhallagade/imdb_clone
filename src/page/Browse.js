import React, { useEffect } from "react";
import Header from "../component/Header";
import Card from "../component/Card";
import { useDispatch, useSelector } from "react-redux";
import { setMovieData } from "../reducers/MovieReducer";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=66da3d7d02515244f65a84cfb6cd4c72"
    )
      .then((res) => res.json())
      .then((res) => dispatch(setMovieData(res.results)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const movies = useSelector((state) => state.moviedata.movies);
  console.log(movies);

  return (
    <div className="w-screen h-fit bg-black">
      <Header />
      <div className="p-10">
        <h1 className="text-left text-white text-5xl font-extrabold ">
          What to Watch - IMDb
        </h1>
        <div className=" grid grid-cols-5  gap-2 mt-4">
          {movies.map((item) => (
            <Card info={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
