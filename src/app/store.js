import { configureStore } from "@reduxjs/toolkit";
import courseworkReducer from "../features/coursework/courseworkSlice";

export const store = configureStore({
  reducer: {
    coursework: courseworkReducer,
  },
});
