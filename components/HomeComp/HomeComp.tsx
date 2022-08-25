import React, { useContext } from "react";
import { AppContext } from "../../context/app-state";

import Category from "../Category/Category";

const HomeComp = () => {
  const categorySlugs = [
    "headphones",
    "speakers",
    "midi-keyboards",
    "laptops",
    "computers",
  ];

  return (
    <div>
      {categorySlugs.map(slug => (
        <Category slug={slug} key={slug} />
      ))}
    </div>
  );
};

export default HomeComp;
