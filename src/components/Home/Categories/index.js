import React from "react";
import ItemCategorie from "./ItemCategorie";
import { categoriesList } from "./helper";

const Categories = () => {
  return (
    <div className="flex  w-3/4 flex-row	justify-around flex-wrap mt-5">
      {categoriesList.map((item) => (
        <ItemCategorie key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
