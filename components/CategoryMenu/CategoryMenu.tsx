import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context/app-state";

import styles from "./CategoryMenu.module.scss";

const CategoryMenu = () => {
  const context = useContext(AppContext);
  const { currentCategory } = context;
  const formattedText = currentCategory.toUpperCase();

  return (
    <section className={styles.container}>
      <div className={styles["mobile-view"]}>
        <p className={styles["mobile-cat"]}>{formattedText}</p>
        <div className={styles["mobile-bars"]}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </section>
  );
};

export default CategoryMenu;
