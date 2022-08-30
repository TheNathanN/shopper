import React, { useContext } from "react";
import styles from "./UserCart.module.scss";

import { AppContext } from "../../context/app-state";

const UserCart = () => {
  const context = useContext(AppContext);
  const { user, setShowSignin } = context;

  return (
    <div className={styles.user}>
      {!user ? (
        <i onClick={() => setShowSignin(true)} className="fa-solid fa-user"></i>
      ) : (
        <i className="fa-solid fa-cart-shopping"></i>
      )}
    </div>
  );
};

export default UserCart;
