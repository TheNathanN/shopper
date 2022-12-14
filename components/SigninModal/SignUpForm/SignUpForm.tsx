import styles from "./SignUp Form.module.scss";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/app-state";
import { callPopup } from "../../../helpers/functions";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const context = useContext(AppContext);
  const { setUser, setMobileMenu, setShowSignin, setSigninPop } = context;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
    setShowSignin(false);
    setMobileMenu(false);
    callPopup(setSigninPop);
  };

  return (
    <form
      action="Sign Up"
      onSubmit={submitHandler}
      className={styles.container}
    >
      <label htmlFor="name">Name</label>
      <input
        type="name"
        name="name"
        id="name"
        value={formData.name}
        onChange={(e) => {
          setFormData((prev) => {
            console.log(e);
            return {
              ...prev,
              name: e.target.value,
            };
          });
        }}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={(e) => {
          setFormData((prev) => {
            return {
              ...prev,
              email: e.target.value,
            };
          });
        }}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={(e) => {
          setFormData((prev) => {
            return {
              ...prev,
              password: e.target.value,
            };
          });
        }}
        required
      />

      <hr className={styles.line} />

      <button type="submit" className={styles["signup-btn"]}>
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
