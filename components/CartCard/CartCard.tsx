import styles from "./CartCard.module.scss";
import React, { useContext } from "react";
import Image from "next/image";

import { AppContext } from "../../context/app-state";

interface Props {
  item: any;
  count: any;
}

const CartCard = ({ item, count }: Props) => {
  const context = useContext(AppContext);
  const { cart, setCart } = context;

  const btnHandler = (type: "-" | "+") => {
    if (cart)
      setCart({
        ...cart,
        [item.id]: type === "-" ? cart[item.id] - 1 : cart[item.id] + 1,
      });
  };

  return (
    <div className={styles.container}>
      <Image src={item.image.url} width={120} height={110} alt={item.name} />
      <div className={styles["details-container"]}>
        <p className={styles.name}>{item.name}</p>
        <p>${item.price.formatted}</p>
      </div>

      <div className={styles["count-container"]}>
        <label htmlFor="count">Count</label>
        <input type="number" name="count" id="count" value={count} readOnly />

        <div className={styles["btn-container"]}>
          <button onClick={() => btnHandler("-")}>-</button>
          <button onClick={() => btnHandler("+")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
