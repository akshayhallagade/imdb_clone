import React from "react";
import Header from "../component/Header";
import WatchListCard from "../component/WatchListCard";
import { useSelector } from "react-redux";
import Footer from "../component/Footer";
import genres_name from "../mock_api/genres.json";

const AddToWatchListSuggestion = () => {
  return (
    <div className="py-10">
      <h1 className="text-2xl">Add Something in the watchlist</h1>
    </div>
  );
};

const WatchList = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const watchlistGenre = useSelector((state) => state.genres.genres);
  console.log(watchlist);
  console.log(watchlistGenre);

  return (
    <div className="w-screen min-h-screen bg-black">
      <Header />
      <div className="p-10">
        <h1 className="text-left text-white text-5xl font-extrabold ">
          WatchList
        </h1>
        <div className="flex gap-2 mt-6">
          {/* Left Side */}
          <div className="text-white w-1/4 px-2 py-6 bg-gray-700 ">
            <div>
              <p className="text-left font-bold text-lg w-full">
                Search Watchlist
              </p>
              <input
                type="text"
                className="w-full mt-2  rounded-md h-8 p-2 outline-none text-black"
                placeholder="Search Watchlist Movie"
              />
            </div>
            <hr className="mt-6" />
            <div className="mt-6">
              <p className="text-left font-bold text-lg w-full">Genres</p>
              <div className="w-fulls flex items-center justify-center flex-col">
                <button className="w-1/2 h-10 hover:bg-gray-800">
                  All Movies
                </button>
                {genres_name.genres.map((item) =>
                  watchlistGenre.includes(item.id) ? (
                    <button className="w-1/2 h-10 hover:bg-gray-800">
                      {item.name}
                    </button>
                  ) : null
                )}
              </div>
            </div>
            <hr className="mt-6" />
          </div>
          {/* Right Side */}
          <div className="text-white w-3/4 bg-gray-800 flex items-center justify-center flex-col gap-4">
            {watchlist.length === 0 ? <AddToWatchListSuggestion /> : null}
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
