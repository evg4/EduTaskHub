import Nav from "./Nav";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { store } from "../../app/store";

it("prints out the contents of the DOM", () => {
  const state = store.getState();
  render(<Nav state={state} />);
  screen.debug();
});
