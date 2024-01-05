import styles from "./Nav.module.css";

function Nav(props) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li
          className={
            props.state.view === "Coursework" ? styles.selected : undefined
          }
          onClick={props.onClick}
        >
          Coursework
        </li>
        <li
          className={
            props.state.view === "Students" ? styles.selected : undefined
          }
          onClick={props.onClick}
        >
          Students
        </li>
        <li
          className={props.state.view === "Forum" ? styles.selected : undefined}
          onClick={props.onClick}
        >
          Forum
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
