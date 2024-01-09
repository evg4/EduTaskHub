import styles from "./Coursework.module.css";
import AddNewCoursework from "../addNewCoursework/AddNewCoursework";

function Coursework(props) {
  return (
    <section className={styles.section}>
      <h2>Coursework</h2>
      <div className={styles.container}>
        {props.state.coursework.map((coursework) => {
          return (
            <div key={coursework.id} className={styles.coursework}>
              {" "}
              {/*change key back to title if i can't get a unique id*/}
              <div className={styles.info}>
                <h3>{coursework.title}</h3>
                <p>Instructions: {coursework.instructions}</p>
                <p>Deadline: {coursework.deadline}</p>
                <p>Class: {coursework.schoolClass}</p>
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
              <p
                id={coursework.title}
                onClick={props.onRemove}
                className={styles.x}
              >
                X
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
