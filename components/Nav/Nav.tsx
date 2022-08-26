import React, { useContext } from "react";
import { AppContext } from "../../context/app-state";
import styles from "./Nav.module.scss";

const Nav = () => {
  const context = useContext(AppContext);
  const { user } = context;

  return (
    <nav className={styles.container}>
      <p className={styles.logo}>Audiophile</p>
      <div>
        {!user ? (
          <i className="fa-solid fa-user"></i>
        ) : (
          <div>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
