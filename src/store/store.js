import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../reducers/MovieReducer";
import WatchListReducer from "../reducers/WatchListReducer";
import SearchReducer from "../reducers/SearchReducer";

export default configureStore({
  reducer: {
    searchText: SearchReducer,
    moviedata: MovieReducer,
    watchlist: WatchListReducer,
  },
});
