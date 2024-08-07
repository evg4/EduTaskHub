import styles from "./AddNewCoursework.module.css";
import { useState } from "react";

function AddNewCoursework(props) {
  const [showForm, setShowForm] = useState(false);
  if (showForm === false) {
    return (
      <section className={styles.sectionhidden}>
        <h3
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add new coursework +
        </h3>
      </section>
    );
  } else {
    return (
      <section className={styles.section}>
        <h3
          onClick={() => {
            setShowForm(false);
          }}
        >
          Add new coursework –
        </h3>
        <form role="form" onSubmit={props.onSubmit} className={styles.form}>
          <label htmlFor="title">Title:</label>
          <br></br>
          <input name="title" id="title" type="text" /*required*/></input>
          <br></br>
          <label htmlFor="instructions">Instructions:</label>
          <br></br>
          <textarea
            name="instructions"
            id="instructions"
            type="text"
            //required
            rows="5"
            cols="21"
          ></textarea>
          <br></br>
          <label htmlFor="deadline">Deadline:</label>
          <br></br>
          <input name="deadline" id="deadline" type="date" /*required*/></input>
          <br></br>
          <label htmlFor="class">Class:</label>
          <br></br>
          <input name="class" id="class" type="text" /*required*/></input>
          <br></br>
          <br></br>
          <button>Add</button>
        </form>
      </section>
    );
  }
}

export default AddNewCoursework;
