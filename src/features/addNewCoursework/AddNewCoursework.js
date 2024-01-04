import styles from "./AddNewCoursework.module.css";

function AddNewCoursework(props) {
  function toggleForm(e) {
    //logic to show/hide form
  }

  return (
    <section>
      <h3 onClick={toggleForm}>Add new coursework</h3>
      <form onSubmit={props.onSubmit} className={styles.form}>
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
        <input name="deadline" id="deadline" type="text" /*required*/></input>
        <br></br>
        <label htmlFor="class">Class:</label>
        <br></br>
        <input name="class" id="class" type="text" /*required*/></input>
        <br></br>
        <button>Add</button>
      </form>
    </section>
  );
}

export default AddNewCoursework;
