import React, { useState } from "react";
import styles from "./SigninModal.module.scss";

import HeaderOptions from "./HeaderOptions/HeaderOptions";
import CloseBtn from "./CloseBtn/CloseBtn";
import SigninForm from "./SigninForm/SigninForm";
import SignUpForm from "./SignUpForm/SignUpForm";

export type Mode = "Login" | "Sign Up";

const SigninModal = () => {
  const modes: Mode[] = ["Login", "Sign Up"];
  const [selected, setSelected] = useState<Mode>(modes[0]);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <CloseBtn />
        <HeaderOptions
          modes={modes}
          selected={selected}
          setSelected={setSelected}
        />
        {selected === "Login" ? <SigninForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default SigninModal;
