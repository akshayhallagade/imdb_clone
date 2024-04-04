import React from "react";
import hero from "../assets/IMDB_hero.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-screen bg-gray-500 flex items-center justify-center gap-4 p-2">
      <Link to="/">
        <img className="w-16" src={hero} alt="img" />
      </Link>
      <input
        className="w-52 px-2 py-1 bg-gray-700 text-white rounded-md outline-none"
        placeholder="Search something"
        type="text"
      />
      <Link to={"/watchlist"} className="text-sm text-white">
        WatchList
      </Link>
      <Link className="text-sm text-white">Akshay</Link>
    </div>
  );
};

export default Header;
