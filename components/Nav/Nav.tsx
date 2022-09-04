import React, { useContext } from "react";
import { AppContext } from "../../context/app-state";
import styles from "./Nav.module.scss";

const Nav = () => {
  const context = useContext(AppContext);
  const {
    user,
    setCurrentCategory,
    setMobileMenu,
    setShowSignin,
    setShowCart,
  } = context;

  return (
    <nav className={styles.container}>
      <button
        className={styles.btn}
        onClick={() => {
          window.scrollTo(0, 0);
          setCurrentCategory("speakers");
          setMobileMenu(false);
          setShowSignin(false);
          setShowCart(false);
        }}
      >
        <p className={styles.logo}>Audiophile</p>
      </button>
    </nav>
  );
};

export default Nav;
