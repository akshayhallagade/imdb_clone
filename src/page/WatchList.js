import React from "react";
import Header from "../component/Header";
import WatchListCard from "../component/WatchListCard";
import { useSelector } from "react-redux";

const WatchList = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  console.log(watchlist);

  return (
    <div className="w-screen h-fit bg-black">
      <Header />
      <div className="p-10">
        <h1 className="text-left text-white text-5xl font-extrabold ">
          WatchList
        </h1>
        <div className="flex">
          <div className="text-white w-1/4">sorting</div>
          <div className="text-white w-3/4 border-2 bg-gray-800 flex items-center justify-center flex-col gap-4">
            {watchlist.map((movie) => {
              return <WatchListCard info={movie} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
