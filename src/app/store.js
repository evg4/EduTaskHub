import { configureStore } from "@reduxjs/toolkit";
import courseworkReducer from "../features/coursework/courseworkSlice";
import viewReducer from "../features/view/viewSlice";
import addNewCourseworkReducer from "../features/addNewCoursework/addNewCourseworkSlice";

export const store = configureStore({
  reducer: {
    coursework: courseworkReducer,
    view: viewReducer,
    addNewCoursework: addNewCourseworkReducer,
  },
});
