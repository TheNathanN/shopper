import styles from "./SigninPopup.module.scss";
import React, { useContext } from "react";
import { AppContext } from "../../context/app-state";

const SigninPopup = () => {
  const context = useContext(AppContext);
  const { user, setSigninPop, setShowCart, setMobileMenu } = context;
  return (
    <div className={styles.container}>
      <p className={styles.header}>Welcome {user?.name}!</p>
      <button
        onClick={() => {
          setMobileMenu(false);
          setSigninPop(false);
          setShowCart(true);
          window.scrollTo(0, 0);
        }}
      >
        View Your Cart Here
      </button>
    </div>
  );
};

export default SigninPopup;
