import React, { useContext } from "react";
import { AppContext } from "../../../context/app-state";
import styles from "./CloseBtn.module.scss";

const CloseBtn = () => {
  const context = useContext(AppContext);
  const { setShowSignin } = context;

  return (
    <div className={styles.container}>
      <i onClick={() => setShowSignin(false)} className="fa-solid fa-xmark"></i>
    </div>
  );
};

export default CloseBtn;
