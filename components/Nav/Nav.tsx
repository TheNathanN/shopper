import React, { useContext } from "react";
import { AppContext } from "../../context/app-state";
import styles from "./Nav.module.scss";

const Nav = () => {
  const context = useContext(AppContext);
  const { user } = context;

  return (
    <nav className={styles.container}>
      <p className={styles.logo}>Audiophile</p>
    </nav>
  );
};

export default Nav;
