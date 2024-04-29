import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../reducers/MovieReducer";
import WatchListReducer from "../reducers/WatchListReducer";
import SearchReducer from "../reducers/SearchReducer";
import GenreReducer from "../reducers/GenreReducer";

export default configureStore({
  reducer: {
    searchText: SearchReducer,
    moviedata: MovieReducer,
    watchlist: WatchListReducer,
    genres: GenreReducer,
  },
});
