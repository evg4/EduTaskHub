import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "coursework",
  initialState: [
    {
      title: "Essay",
      instructions: "Write 2000 words on Shakespeare",
      deadline: "01 Feb 2024",
      class: "Year 11",
      assigned: false,
      pastDeadline: false,
    },
  ],
  reducers: {
    addCoursework: (state, action) => {
      state.push(action.payload);
    },
    removeCoursework: (state, action) => {
      return state.filter((coursework) => {
        return coursework.name !== action.payload;
      });
    },
  },
};

const courseworkSlice = createSlice(options);
export const { addCoursework, removeCoursework } = courseworkSlice.actions;
export default courseworkSlice.reducer;
