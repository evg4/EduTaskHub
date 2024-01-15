import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "coursework",
  initialState: [
    {
      title: "Essay",
      instructions: "Write 2000 words on Shakespeare.",
      deadline: "2024-01-05",
      schoolClass: "Year 11",
      assigned: false,
      pastDeadline: false,
    },
    {
      title: "Presentation",
      instructions: "Topic of your choice. Use PowerPoint.",
      deadline: "2024-01-05",
      schoolClass: "Year 10",
      assigned: false,
      pastDeadline: true,
    },
    {
      title: "Group task",
      instructions: "Maximum 5 people.",
      deadline: "2024-01-05",
      schoolClass: "Year 11",
      assigned: true,
      pastDeadline: false,
    },
    {
      title: "Essay 2",
      instructions: "Write 2000 words on a poet of your choice.",
      deadline: "2024-01-05",
      schoolClass: "Year 11",
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
        return coursework.title !== action.payload;
      });
    },
  },
};

const courseworkSlice = createSlice(options);
export const { addCoursework, removeCoursework } = courseworkSlice.actions;
export default courseworkSlice.reducer;
