import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Coursework</li>
        <li>Students</li>
        <li>Forum</li>
      </ul>
    </nav>
  );
}

export default Nav;
