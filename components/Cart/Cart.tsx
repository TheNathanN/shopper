import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/app-state";
import styles from "./Cart.module.scss";

const Cart = () => {
  const context = useContext(AppContext);
  const { setCart, cart } = context;

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <div>Cart</div>
    </div>
  );
};

export default Cart;
