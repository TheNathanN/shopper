import React from "react";
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
