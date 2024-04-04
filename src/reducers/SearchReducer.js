import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "searchKeyword",
  initialState: {
    searchText: "",
  },
  reducers: {
    searchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchText } = counterSlice.actions;

export default counterSlice.reducer;
