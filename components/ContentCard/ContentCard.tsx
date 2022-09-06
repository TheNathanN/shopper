import React, { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./ContentCard.module.scss";
import { AppContext } from "../../context/app-state";
import { callPopup } from "../../helpers/functions";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

interface Props {
  info: any;
}

const ContentCard = ({ info }: Props) => {
  const router = useRouter();
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
    setCartPop,
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
    else if (cart[info.id]) setCart({ ...cart, [info.id]: cart[info.id] + 1 });
    else setCart({ ...cart, [info.id]: 1 });

    setCartCount(cartCount + 1);
  };

  const clickHandler = () => {
    router.push(info.id);
  }

  return (
    <section className={styles.container}>
      <div onClick={clickHandler} className={styles["img-container"]}>
        <Image
          src={info.image.url}
          width={120}
          height={110}
          alt={info.name}
          priority
        />
      </div>

      <div className={styles["price-container"]}>
        <p onClick={clickHandler} className={styles.title}>{info.name}</p>
        <p onClick={clickHandler} className={styles.price}>${info.price.formatted}</p>
          <AddToCartBtn info={info} />
      </div>
    </section>
  );
};

export default ContentCard;
