import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { Cross } from "../assets/icons/icons";
import { searchText } from "../reducers/SearchReducer";

const SearchOverlay = () => {
  const [searchedData, setSearchedData] = useState([]);
  const searchKeyword = useSelector((state) => state.searchText.searchText);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&api_key=66da3d7d02515244f65a84cfb6cd4c72`
    )
      .then((res) => res.json())
      .then((res) => setSearchedData(res.results))
      .catch((err) => console.log(err));
  }, [searchKeyword]);

  const handlerSearchText = () => {
    dispatch(searchText(""));
  };

  return (
    <div className="fixed top-0 z-20 w-screen h-fit bg-black opacity-90">
      <Header />
      <div className="p-10">
        <div className=" p-2 flex justify-between">
          <h1 className="text-left font-bold text-2xl text-white">
            Search Result.....
          </h1>
          <button className="text-white" onClick={handlerSearchText}>
            <Cross className="w-7 h-7" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6   grid-flow-row gap-2 z-20 ">
          {searchedData.map((movieData) => (
            <Card info={movieData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
