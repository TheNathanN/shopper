import React, { useContext } from "react";
import { AppContext } from "../../context/app-state";
import ContentCard from "../ContentCard/ContentCard";
import styles from "./Category.module.scss";

interface Props {
  slug: string;
}

const Category = ({ slug }: Props) => {
  const context = useContext(AppContext);
  const { data } = context;
  const filteredData = data?.data?.filter(
    (info: any): any => info.categories[0].slug === slug
  );

  const displayText = slug.replace("-", " ").toUpperCase();

  console.log(filteredData);

  return (
    <section className={styles.container} id={slug}>
      <p className={styles["section-title"]}>{displayText}</p>
      {filteredData &&
        filteredData.map((info: any) => (
          <ContentCard info={info} key={info.id} />
        ))}
    </section>
  );
};

export default Category;
