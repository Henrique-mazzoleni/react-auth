import { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <h2>React Auth</h2>
        <div className={styles.actions}>
          <div className={styles.links}>
            <Link to="/Login">Login</Link>
            <Link to="/Profile">Profile</Link>
          </div>
          <button className={styles.outline}>Logout</button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
