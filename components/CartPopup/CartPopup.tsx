import styles from "./CartPopup.module.scss";
import React, { useContext } from "react";
import { AppContext } from "../../context/app-state";

const CartPopup = () => {
  const context = useContext(AppContext);
  const { setCartPop, setShowCart, setSigninPop, setMobileMenu } = context;
  return (
    <div className={styles.container}>
      <p className={styles.header}>
        Added to Cart <i className="fa-solid fa-check"></i>
      </p>
      <button
        onClick={() => {
          setMobileMenu(false);
          setSigninPop(false);
          setCartPop(false);
          setShowCart(true);
          window.scrollTo(0, 0);
        }}
      >
        View Cart Here
      </button>
    </div>
  );
};

export default CartPopup;
