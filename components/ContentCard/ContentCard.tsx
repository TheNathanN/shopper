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
      </div>
      <p>{info.name}</p>
    </section>
  );
};

export default ContentCard;
