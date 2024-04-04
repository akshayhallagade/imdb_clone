import React from "react";
import InformationButton from "./InformationButton";
import PlayButton from "./PlayButton";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist } from "../reducers/WatchListReducer";
import { BookMarkUnchecked, BookMarkchecked } from "../assets/icons/icons";

const Card = ({ info }) => {
  const poster_base_url = "https://image.tmdb.org/t/p/w500";

  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const dispatch = useDispatch();
  const handleAddToWatchList = () => dispatch(addToWatchlist(info.id));

  const isMovieAdded = watchlist.find((id) => id === info.id);

  return (
    <div className="flex justify-center flex-col bg-gray-800">
      <div className="relative w-full h-full ">
        <img
          className="w-full"
          src={poster_base_url + info.poster_path}
          alt="img"
        />
        {isMovieAdded ? (
          <button
            className="absolute w-10 h-12 top-0 left-0"
            onClick={handleAddToWatchList}
          >
            <BookMarkchecked className="w-10 h-12 fill-yellow-400 items-end text-white hover:fill-yellow-400" />
          </button>
        ) : (
          <button
            className="absolute w-10 h-12 top-0 left-0"
            onClick={handleAddToWatchList}
          >
            <BookMarkUnchecked className="w-10 h-12 fill-red-800 items-end text-white hover:fill-yellow-400" />
          </button>
        )}
      </div>
      <div className="px-2 py-4">
        <p className="text-xl text-white font-semibold text-left ">
          {info.title}
        </p>
        <div className="flex items-center justify-center flex-col gap-4 mt-3">
          <InformationButton />
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default Card;
