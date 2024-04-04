import React, { useRef, useState } from "react";
import hero from "../assets/IMDB_hero.png";
import { Link } from "react-router-dom";
import { Account, BookMarkUnchecked } from "../assets/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { searchText } from "../reducers/SearchReducer";

const Header = () => {
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const searchKeyword = useSelector((state) => state.searchText.searchText);
  const searchRef = useRef();

  const getSearchKeyword = () => dispatch(searchText(searchRef.current.value));

  const handlerDropdown = () => setshow(!show);

  return (
    <div className="w-screen bg-gray-700 flex items-center justify-center gap-4 p-2">
      <Link to="/">
        <img className="w-16" src={hero} alt="img" />
      </Link>
      <input
        className="w-96 px-2 py-1 bg-white text-black rounded-md outline-none"
        placeholder="Search something"
        type="text"
        ref={searchRef}
        value={searchKeyword}
        onChange={getSearchKeyword}
      />
      <Link
        to={"/watchlist"}
        className="text-base text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-600 p-2"
      >
        <BookMarkUnchecked className="w-5 fill-gray-50" /> WatchList
      </Link>
      <div className="relative">
        <button
          className="text-base text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-600 p-2"
          onClick={handlerDropdown}
        >
          <Account /> Akshay
        </button>
        {show && (
          <div className="absolute w-40 bg-gray-600 right-0 z-30">
            <div className="flex items-center justify-center flex-col py-1 text-white ">
              <button className="h-10 py-6 flex items-center justify-center hover:bg-gray-500 w-full">
                WatchList
              </button>
              <button className="h-10 py-6 flex items-center justify-center hover:bg-gray-500 w-full">
                Account
              </button>
              <button className="h-10 py-6 flex items-center justify-center hover:bg-gray-500 w-full">
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
