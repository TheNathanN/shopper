import styles from "./UserCart.module.scss";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../context/app-state";

const UserCart = () => {
  const router = useRouter();
  const context = useContext(AppContext);
  const {
    user,
    setShowSignin,
    setShowCart,
    setMobileMenu,
    setCurrentCategory,
    setSigninPop,
    setCartPop
  } = context;

  return (
    <div className={styles.user}>
      {!user ? (
        <i onClick={() => setShowSignin(true)} className="fa-solid fa-user"></i>
      ) : (
        <i
          onClick={() => {
            setCurrentCategory("cart");
            setMobileMenu(false);
            setShowSignin(false);
            setShowCart(true);
            setCartPop(false);
              setSigninPop(false);
              router.push('/');
          }}
          className="fa-solid fa-cart-shopping"
        ></i>
      )}
    </div>
  );
};

export default UserCart;
