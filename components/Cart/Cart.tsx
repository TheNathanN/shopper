import styles from "./Cart.module.scss";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/app-state";
import { pluralCheck } from "../../helpers/functions";
import CartCard from "../CartCard/CartCard";
import TotalPrice from "./TotalPrice/TotalPrice";

const Cart = () => {
  const context = useContext(AppContext);
  const { cart, cartCount, data, setCartCount } = context;

  const cartItems = data.data.filter((info: any) => {
    if (cart && cart[info.id]) return info;
  });

  useEffect(() => {
    if (cart) {
      const newCount = Object.values(cart).reduce(
        (prev: any, current: any) => prev + current,
        0
      );
      setCartCount(newCount);
    }
  }, [cart, cartCount, setCartCount]);

  return (
    <div className={styles.container}>
      <p className={styles.count}>
        {cartCount} Item{pluralCheck(cartCount)}
      </p>

      {cartItems.map((item: any) => (
        <CartCard key={item.id} item={item} count={cart && cart[item.id]} />
      ))}

      <TotalPrice cartItems={cartItems} />
      <button className={styles.btn}>Checkout HERE</button>
    </div>
  );
};

export default Cart;
