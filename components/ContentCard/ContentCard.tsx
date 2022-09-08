import styles from "./ContentCard.module.scss";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

interface Props {
  info: any;
}

const ContentCard = ({ info }: Props) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(info.id);
  };

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
        <p onClick={clickHandler} className={styles.title}>
          {info.name}
        </p>
        <p onClick={clickHandler} className={styles.price}>
          ${info.price.formatted}
        </p>
        <AddToCartBtn info={info} />
      </div>
    </section>
  );
};

export default ContentCard;
