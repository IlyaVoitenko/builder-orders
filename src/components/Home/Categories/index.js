import React from "react";
import ItemCategory from "./ItemCategory";
import { categoriesList } from "./constants";

const Categories = () => {
  return (
    <div className="flex  w-3/4 max-sm:w-[95%] flex-row	justify-around flex-wrap mt-5">
      {categoriesList &&
        categoriesList.map((item, index) => (
          <ItemCategory key={item.id} item={item} id={index + 1} />
        ))}
    </div>
  );
};

export default Categories;
