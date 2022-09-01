import React, { useContext } from "react";
import Image from "next/image";
import styles from "./ContentCard.module.scss";
import { AppContext } from "../../context/app-state";

interface Props {
  info: any;
}

const ContentCard = ({ info }: Props) => {
  const context = useContext(AppContext);
  const {
    setCart,
    cart,
    user,
    setShowSignin,
    setMobileMenu,
    setShowCart,
    setCartCount,
    cartCount,
  } = context;

  const btnHandler = () => {
    setShowCart(false);
    if (!user) {
      setMobileMenu(true);
      setShowSignin(true);
    }

    if (!cart) setCart({ [info.id]: 1 });
    else if (cart[info.id]) setCart({ ...cart, [info.id]: cart[info.id] + 1 });
    else setCart({ ...cart, [info.id]: 1 });

    setCartCount(cartCount + 1);
  };

  return (
    <section className={styles.container}>
      <div className={styles["img-container"]}>
        <Image
          src={info.image.url}
          width={100}
          height={100}
          alt={info.name}
          priority
        />
      </div>

      <div className={styles["price-container"]}>
        <p className={styles.title}>{info.name}</p>
        <p className={styles.price}>${info.price.formatted}</p>
        <button
          onClick={btnHandler}
          className={styles["cart-btn"]}
          type="button"
        >
          Add To Cart
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </section>
  );
};

export default ContentCard;
