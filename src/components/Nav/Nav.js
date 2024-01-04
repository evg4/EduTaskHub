import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>Coursework</li>
        <li>Students</li>
        <li>Forum</li>
      </ul>
    </nav>
  );
}

export default Nav;
