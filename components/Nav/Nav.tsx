import styles from "./Nav.module.scss";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../context/app-state";

const Nav = () => {
  const router = useRouter();
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
          router.push('/');
        }}
      >
        <p className={styles.logo}>Audiophile</p>
      </button>
    </nav>
  );
};

export default Nav;
