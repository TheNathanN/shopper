import Image from "next/image";
import React from "react";
import styles from "./ContentCard.module.scss";

interface Props {
  info: any;
}

const ContentCard = ({ info }: Props) => {

  return (
    <section className={styles.container}>
      <div className={styles["img-container"]}>
        <Image src={info.image.url} width={100} height={100} alt={info.name} />
      </div>

      <div className={styles["price-container"]}>
        <p className={styles.title}>{info.name}</p>
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
