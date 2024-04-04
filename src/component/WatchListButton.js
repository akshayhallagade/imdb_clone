import React from "react";
import { BookMarkUnchecked } from "../assets/icons/icons";
import {
  addToWatchlist,
  removeFromWatchList,
} from "../reducers/WatchListReducer";
import { useDispatch, useSelector } from "react-redux";

const AddWatchListButton = ({ info }) => {
  const dispatch = useDispatch();
  const handleAddToWatchList = () => dispatch(addToWatchlist(info));
  return (
    <button
      className="absolute w-10 h-12 top-0 left-0"
      onClick={handleAddToWatchList}
    >
      <BookMarkUnchecked className="w-10 h-12 fill-red-800 items-end text-white hover:fill-yellow-400" />
    </button>
  );
};
const RemoveWatchListButton = ({ info }) => {
  const dispatch = useDispatch();
  const removeFromWatchListHandler = () => dispatch(removeFromWatchList(info));
  return (
    <button
      className="absolute w-10 h-12 top-0 left-0"
      onClick={removeFromWatchListHandler}
    >
      <BookMarkUnchecked className="w-10 h-12 fill-yellow-800 items-end text-white hover:fill-yellow-400" />
    </button>
  );
};

const WatchListButton = ({ info }) => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  //   console.log(watchlist[0].id == info.id);

  const isInWatchList = () => {
    // if (watchlist.length !== 0) {
    //   const temp = watchlist.filter((movie) => movie.id === info.id);
    //   if (temp.length === 0) return true;
    // }
    return true;
  };

  return (
    <>
      {isInWatchList() ? (
        <AddWatchListButton info={info} />
      ) : (
        <RemoveWatchListButton info={info} />
      )}
    </>
  );
};

export default WatchListButton;
