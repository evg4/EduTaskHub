import Header from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

it("prints out the contents of the DOM", () => {
  render(<Header />);
  screen.debug();
});
