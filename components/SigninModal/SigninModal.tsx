import React, { useState } from "react";
import styles from "./SigninModal.module.scss";

const SigninModal = () => {
  type Mode = "Login" | "Sign Up";
  const modes: Mode[] = ["Login", "Sign Up"];
  const [selected, setSelected] = useState<Mode>(modes[0]);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles["btn-container"]}>
          {modes.map(text => (
            <button
              onClick={() => setSelected(text)}
              key={text}
              className={styles.btn}
              style={
                selected === text
                  ? {
                      color: "#7E7A7A",
                    }
                  : {
                      color: "black",
                    }
              }
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
