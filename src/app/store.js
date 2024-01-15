import { configureStore } from "@reduxjs/toolkit";
import courseworkReducer from "../features/Coursework/courseworkSlice";
import viewReducer from "../features/View/viewSlice";
import addNewCourseworkReducer from "../features/AddNewCoursework/addNewCourseworkSlice";

export const store = configureStore({
  reducer: {
    coursework: courseworkReducer,
    view: viewReducer,
    addNewCoursework: addNewCourseworkReducer,
  },
});
