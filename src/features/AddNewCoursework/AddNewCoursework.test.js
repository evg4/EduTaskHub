import AddNewCoursework from "./AddNewCoursework";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//import userEvent from "@testing-library/user-event";
import React from "react";
import { store } from "../../app/store";
//mport { toggleView } from "./addNewCourseworkSlice";
//import { Provider } from "react-redux";

it("renders a button", () => {
  const state = store.getState();
  render(<AddNewCoursework state={state} />);
  screen.debug();
});
