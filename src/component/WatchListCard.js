import React, { useEffect, useState } from "react";

import InformationButton from "./InformationButton";
import PlayButton from "./PlayButton";
import { BookMarkchecked } from "../assets/icons/icons";
import { useDispatch } from "react-redux";
import { removeFromWatchList } from "../reducers/WatchListReducer";
import { addToGenre } from "../reducers/GenreReducer";

const WatchListCard = ({ movieId }) => {
  const [movieInfo, setMovieInfo] = useState({});
  const dispatch = useDispatch();
  const poster_base_url = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=66da3d7d02515244f65a84cfb6cd4c72`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        res.genres.forEach((element) => dispatch(addToGenre(element.id)));
        setMovieInfo(res);
      });
  }, [dispatch, movieId]);

  const handleRemoveFromWatchList = () =>
    dispatch(removeFromWatchList(movieId));

  return (
    <div className="flex w-full p-2 border-2">
      <div className="relative w-1/3">
        <img
          className="w-full"
          src={poster_base_url + movieInfo.backdrop_path}
          alt="img"
        />
        <button
          className="absolute w-10 h-12 top-0 left-0"
          onClick={handleRemoveFromWatchList}
        >
          <BookMarkchecked className="w-10 h-12 fill-yellow-400 items-end text-white hover:fill-yellow-400" />
        </button>
      </div>
      <div className="p-2 border-2 text-left w-2/3">
        <h1 className="text-4xl">{movieInfo.original_title}</h1>
        <p>{movieInfo.overview}</p>
        <div className="flex w-72  items-center gap-4 justify-center mt-3">
          <InformationButton />
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default WatchListCard;
