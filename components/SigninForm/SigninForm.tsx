import React, { useContext } from "react";
import { AppContext } from "../../context/app-state";
import styles from "./SigninForm.module.scss";

const SigninForm = () => {
  const context = useContext(AppContext);
  const { setUser, setMobileMenu, setShowSignin } = context;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign In N/A");
    console.log(e);
  };

  const guestHandler = () => {
    setUser({
      email: "guest@email.com",
      name: "Guest",
      password: "",
    });
    setShowSignin(false);
    setMobileMenu(false);
  };

  return (
    <form action="Login" onSubmit={submitHandler} className={styles.container}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required />

      <hr className={styles.line} />

      <button type="submit" className={styles["login-btn"]}>
        Login
      </button>

      <button
        type="button"
        onClick={guestHandler}
        className={styles["guest-btn"]}
      >
        Login as Guest
      </button>
    </form>
  );
};

export default SigninForm;
