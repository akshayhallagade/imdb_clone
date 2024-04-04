import React from "react";
import Header from "../component/Header";
import WatchListCard from "../component/WatchListCard";
import { useSelector } from "react-redux";
import Footer from "../component/Footer";

const AddIntoWatchListSuggester = () => {
  return (
    <div className="py-10">
      <h1 className="text-2xl">Add Something in the watchlist</h1>
    </div>
  );
};

const WatchList = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  console.log(watchlist);

  return (
    <div className="w-screen min-h-screen bg-black">
      <Header />
      <div className="p-10">
        <h1 className="text-left text-white text-5xl font-extrabold ">
          WatchList
        </h1>
        <div className="flex">
          <div className="text-white w-1/4">sorting</div>
          <div className="text-white w-3/4 bg-gray-800 flex items-center justify-center flex-col gap-4">
            {watchlist.length === 0 ? <AddIntoWatchListSuggester /> : null}
            {watchlist.map((movieId) => {
              return <WatchListCard movieId={movieId} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WatchList;
