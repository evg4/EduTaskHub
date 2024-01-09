import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "addNewCoursework",
  initialState: "hide_form",
  reducers: {
    toggleView: (state, action) => {
      state = action.payload;
      return state;
    },
  },
};

const addNewCourseworkSlice = createSlice(options);
export const { toggleView } = addNewCourseworkSlice.actions;
export default addNewCourseworkSlice.reducer;
