import styles from "./CartCard.module.scss";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { AppContext } from "../../context/app-state";

interface Props {
  item: any;
  count: any;
}

const CartCard = ({ item, count }: Props) => {
  const router = useRouter();
  const context = useContext(AppContext);
  const { cart, setCart } = context;

  const btnHandler = (type: "-" | "+") => {
    if (cart)
      setCart((prev) => {
        return {
          ...prev,
          [item.id]: type === "-" ? cart[item.id] - 1 : cart[item.id] + 1,
        };
      });
  };

  const clickHandler = () => {
    router.push(item.id);
  };

  return (
    <div className={styles.container}>
      <Image
        onClick={clickHandler}
        src={item.image.url}
        width={120}
        height={110}
        alt={item.name}
      />
      <div onClick={clickHandler} className={styles["details-container"]}>
        <p className={styles.name}>{item.name}</p>
        <p>${item.price.formatted}</p>
      </div>

      <div className={styles["count-container"]}>
        <label htmlFor="count">Count</label>
        <input type="number" name="count" id="count" value={count} readOnly />

        <div className={styles["btn-container"]}>
          <button onClick={() => btnHandler("-")}>-</button>
          <button onClick={() => btnHandler("+")} role="increment">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
