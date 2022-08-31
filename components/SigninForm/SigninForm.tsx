import React from "react";
import styles from "./SigninForm.module.scss";

const SigninForm = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const guestHandler = () => {};

  return (
    <form action="Login" onSubmit={submitHandler} className={styles.container}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required />
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
