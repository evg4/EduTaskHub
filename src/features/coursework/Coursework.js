import styles from "./Coursework.module.css";
import AddNewCoursework from "../addNewCoursework/AddNewCoursework";

function Coursework(props) {
  return (
    <section>
      <h2>Coursework</h2>
      <div className={styles.container}>
        {props.state.coursework.map((coursework) => {
          return (
            <div key={coursework.title} className={styles.coursework}>
              <h3>{coursework.title}</h3>
              <p>Instructions: {coursework.instructions}</p>
              <p>Deadline: {coursework.deadline}</p>
              <p>Class: {coursework.class}</p>
              <p>
                {coursework.assigned
                  ? "Already assigned to students."
                  : "You have not assigned this to any students yet."}
              </p>
              <p>
                {coursework.pastDeadline
                  ? "The deadline has already passed."
                  : "This assignment is still open."}
              </p>
            </div>
          );
        })}
      </div>
      <AddNewCoursework onSubmit={props.onSubmit} />
    </section>
  );
}

export default Coursework;
