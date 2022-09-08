import styles from "./AddToCartBtn.module.scss";
import React, { useContext } from "react";
import { AppContext } from "../../context/app-state";
import { callPopup } from "../../helpers/functions";

interface Props {
  info: any;
}

const AddToCartBtn = ({ info }: Props) => {
  const context = useContext(AppContext);
  const {
    setShowCart,
    setMobileMenu,
    setShowSignin,
    setCartPop,
    user,
    cart,
    setCart,
    setCartCount,
    cartCount,
  } = context;

  const btnHandler = () => {
    setShowCart(false);

    if (!user) {
      setMobileMenu(true);
      setShowSignin(true);
    } else {
      callPopup(setCartPop);
    }

    if (!cart) setCart({ [info.id]: 1 });
    else if (cart[info.id])
      setCart((prev) => {
        return { ...prev, [info.id]: cart[info.id] + 1 };
      });
    else
      setCart((prev) => {
        return { ...prev, [info.id]: 1 };
      });

    setCartCount(cartCount + 1);
  };

  return (
    <button onClick={btnHandler} className={styles["cart-btn"]} type="button">
      Add To Cart
      <i className="fa-solid fa-cart-shopping"></i>
    </button>
  );
};

export default AddToCartBtn;
