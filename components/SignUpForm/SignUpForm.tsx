import React from "react";
import styles from "./SignUp Form.module.scss";

const SignUpForm = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form
      action="Sign Up"
      onSubmit={submitHandler}
      className={styles.container}
    >
      <label htmlFor="name">Name</label>
      <input type="name" name="name" id="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" required />
      <hr className={styles.line} />
      <button type="submit" className={styles["signup-btn"]}>
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
