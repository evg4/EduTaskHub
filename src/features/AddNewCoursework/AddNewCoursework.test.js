import AddNewCoursework from "./AddNewCoursework";
import { waitFor, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import React from "react";
import { store } from "../../app/store";
import { toggleView } from "./addNewCourseworkSlice";
import { Provider } from "react-redux";
import mockStore from "../../app/mockStore";

it("renders a button", () => {
  const state = store.getState();
  render(<AddNewCoursework />);
  screen.debug();
});

it("displays a form when clicked", async () => {
  const store = mockStore({});
  const mockOnSubmit = jest.fn();
  render(
    <Provider store={store}>
      <AddNewCoursework onSubmit={mockOnSubmit} />
    </Provider>
  );
  const button = screen.getByText("Add new coursework +");
  expect(screen.queryByRole("form")).not.toBeInTheDocument();
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  await waitFor(() => {
    expect(screen.getByText("Deadline:")).toBeInTheDocument();
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  userEvent.click(button);
  await waitFor(() => {
    expect(screen.queryByText("Deadline:")).not.toBeInTheDocument();
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
