import Image from "next/image";
import React from "react";
import styles from "./ContentCard.module.scss";

interface Props {
  info: any;
}

const ContentCard = ({ info }: Props) => {
  console.log(info);
  return (
    <section className={styles.container}>
      <div className={styles["img-container"]}>
        <Image src={info.image.url} width={80} height={80} />
        <p className={styles.title}>{info.name}</p>
      </div>

      <div className={styles["price-container"]}>
        <p className={styles.price}>${info.price.formatted}</p>
        <button className={styles["cart-btn"]}>
          Add To Cart
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </section>
  );
};

export default ContentCard;
