import React from "react";
import {
  addCoursework,
  removeCoursework,
} from "./features/coursework/courseworkSlice";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Coursework from "./features/coursework/Coursework";
import AddNewCoursework from "./features/addNewCoursework/AddNewCoursework";

function App({ state, dispatch }) {
  function handleAddCoursework(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let instructions = document.getElementById("instructions").value;
    let deadline = document.getElementById("deadline").value;
    let schoolClass = document.getElementById("class").value;
    dispatch(
      addCoursework({
        title,
        instructions,
        deadline,
        schoolClass,
        assigned: false,
        pastDeadline: false,
      })
    );
    document.getElementById("title").value = "";
    document.getElementById("instructions").value = "";
    document.getElementById("deadline").value = "";
    document.getElementById("class").value = "";
  }

  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Coursework onSubmit={handleAddCoursework} state={state}></Coursework>
    </>
  );
}

export default App;
