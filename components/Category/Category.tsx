import React, { useContext } from "react";
import { AppContext } from "../../context/app-state";
import { formatSlug } from "../../helpers/functions";
import ContentCard from "../ContentCard/ContentCard";
import styles from "./Category.module.scss";

interface Props {
  slug: string;
}

const Category = ({ slug }: Props) => {
  const context = useContext(AppContext);
  const { data } = context;
  
  const filteredData: any = data?.data?.filter(
    (info: any): any => info.categories[0].slug === slug
  );

  return (
    <section className={styles.container} id={slug}>
      <p className={styles["section-title"]}>{formatSlug(slug)}</p>
      {filteredData &&
        filteredData.map((info: any) => (
          <ContentCard info={info} key={info.id} />
        ))}
    </section>
  );
};

export default Category;
