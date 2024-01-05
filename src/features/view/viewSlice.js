import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "view",
  initialState: "Coursework",
  reducers: {
    changeView: (state, action) => {
      state = action.payload;
      return state;
    },
  },
};

const viewSlice = createSlice(options);
export const { changeView } = viewSlice.actions;
export default viewSlice.reducer;
