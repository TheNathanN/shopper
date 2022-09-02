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
  const { cart, setCart, setCartCount, cartCount } = context;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cart)
      setCart({
        ...cart,
        [item.id]: Number(e.currentTarget.value),
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
        <input
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={e => changeHandler(e)}
        />
      </div>
    </div>
  );
};

export default CartCard;
