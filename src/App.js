import React from "react";
import {
  addCoursework,
  removeCoursework,
} from "./features/Coursework/courseworkSlice";
import { toggleView } from "./features/AddNewCoursework/addNewCourseworkSlice";
import { changeView } from "./features/View/viewSlice";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import View from "./features/View/View";

function App({ state, dispatch }) {
  function showCourseworkForm() {
    if (state.addNewCoursework === "hide_form") {
      dispatch(toggleView("show_form"));
    } else {
      dispatch(toggleView("hide_form"));
    }
  }

  function handleRemoveCoursework(e) {
    let courseworkToRemove = e.target.id;
    if (
      window.confirm(
        "Are you sure you want to delete this coursework? This cannot be undone."
      )
    ) {
      dispatch(removeCoursework(courseworkToRemove));
    }
  }

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

  function handleChangeView(e) {
    let view = e.target.innerHTML;
    dispatch(changeView(view));
  }

  return (
    <div className={styles.app}>
      <Header></Header>
      <Nav onClick={handleChangeView} state={state}></Nav>
      <View
        onRemove={handleRemoveCoursework}
        onSubmit={handleAddCoursework}
        onShow={showCourseworkForm}
        state={state}
      ></View>
      <Footer />
    </div>
  );
}

export default App;
