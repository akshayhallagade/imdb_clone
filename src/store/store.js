import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../reducers/MovieReducer";
import WatchListReducer from "../reducers/WatchListReducer";

export default configureStore({
  reducer: {
    moviedata: MovieReducer,
    watchlist: WatchListReducer,
  },
});
