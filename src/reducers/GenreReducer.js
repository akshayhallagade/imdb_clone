import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "genresData",
  initialState: {
    genres: [],
  },
  reducers: {
    addToGenre: (state, action) => {
      if (!state.genres.includes(action.payload))
        state.genres = [...state.genres, action.payload];
    },
    removeFromGenre: (state, action) => state.genres.delete(action.payload),
  },
});

// Action creators are generated for each case reducer function
export const { addToGenre, removeFromGenre } = counterSlice.actions;

export default counterSlice.reducer;
