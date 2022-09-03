import styles from "./MobileMenu.module.scss";
import React, { useContext } from "react";
import { categorySlugs } from "../../helpers/variables";
import { formatSlug } from "../../helpers/functions";
import { AppContext } from "../../context/app-state";
import { Categories } from "../../helpers/types";
import UserCart from "../UserCart/UserCart";

const MobileMenu = () => {
  const context = useContext(AppContext);
  const {
    setMobileMenu,
    currentCategory,
    setCurrentCategory,
    setShowCart,
  } = context;

  const clickHandler = (slug: Categories) => {
    setMobileMenu(false);
    setCurrentCategory(slug);
    setShowCart(false);
  };

  return (
    <div className={styles.container}>
      <i onClick={() => setMobileMenu(false)} className="fa-solid fa-xmark"></i>
      <ul>
        {categorySlugs.map(slug => (
          <li
            onClick={() => clickHandler(slug)}
            key={slug}
            style={
              currentCategory === slug
                ? {
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: ".5em",
                  }
                : {}
            }
          >
            <a href={`#${slug}`}>{formatSlug(slug)}</a>
          </li>
        ))}
      </ul>
      <UserCart />
    </div>
  );
};

export default MobileMenu;
