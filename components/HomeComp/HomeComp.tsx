import React from "react";
import { categorySlugs } from "../../helpers/variables";

import Category from "../Category/Category";

const HomeComp = () => {
  return (
    <div>
      {categorySlugs.map((slug) => (
        <Category slug={slug} key={slug} />
      ))}
    </div>
  );
};

export default HomeComp;
