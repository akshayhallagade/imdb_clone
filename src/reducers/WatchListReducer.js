import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Watchlist",
  initialState: {
    watchlist: [],
  },
  reducers: {
    addToWatchlist: (state, action) => {
      const temp = state.watchlist.filter(
        (movie) => movie.id === action.payload.id
      );
      if (temp.length === 0)
        state.watchlist = [...state.watchlist, action.payload];
    },

    removeFromWatchList: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWatchlist, removeFromWatchList } = counterSlice.actions;

export default counterSlice.reducer;
