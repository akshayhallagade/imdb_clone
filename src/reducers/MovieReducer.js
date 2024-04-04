import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "moviedata",
  initialState: {
    movies: [],
  },
  reducers: {
    setMovieData: (state, action) => {
      state.movies = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovieData } = counterSlice.actions;

export default counterSlice.reducer;
