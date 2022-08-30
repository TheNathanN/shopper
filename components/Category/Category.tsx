import styles from "./Category.module.scss";

import React, { useContext, useEffect } from "react";
import { useInView } from "react-hook-inview";
import { AppContext } from "../../context/app-state";
import { formatSlug } from "../../helpers/functions";
import { Categories } from "../../helpers/types";
import ContentCard from "../ContentCard/ContentCard";

interface Props {
  slug: Categories;
}

const Category = ({ slug }: Props) => {
  const context = useContext(AppContext);
  const { data, setCurrentCategory, currentCategory } = context;
  const [ref, isVisible] = useInView({
    threshold: 0.4,
  });

  const filteredData: any = data?.data?.filter(
    (info: any): any => info.categories[0].slug === slug
  );

  useEffect(() => {
    if (isVisible) setCurrentCategory(slug);
  }, [currentCategory, isVisible, slug, setCurrentCategory]);

  console.log(data);

  return filteredData ? (
    <section className={styles.container} id={slug} ref={ref}>
      <p className={styles["section-title"]}>{formatSlug(slug)}</p>
      {filteredData.map((info: any) => (
        <ContentCard info={info} key={info.id} />
      ))}
    </section>
  ) : (
    <div></div>
  );
};

export default Category;
