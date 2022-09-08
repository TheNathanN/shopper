import React, { useState } from "react";
import { Mode } from "../SigninModal";
import styles from "./HeaderOptions.module.scss";

interface Props {
  modes: Mode[];
  setSelected: React.Dispatch<React.SetStateAction<Mode>>;
  selected: Mode;
}

const HeaderOptions = ({ modes, setSelected, selected }: Props) => {
  return (
    <div className={styles.container}>
      {modes.map((text) => (
        <button
          onClick={() => setSelected(text)}
          key={text}
          className={`${styles.btn} ${selected === text && styles.selected}`}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default HeaderOptions;
