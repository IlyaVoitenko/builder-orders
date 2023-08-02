import React from "react";
import ItemProduct from "./ItemProduct";
import { categoriesList } from "./helper";

const Products = () => {
  return (
    <section className="flex flex-col  items-center w-full flex-wrap mt-12">
      <h2 className="text-center text-4xl font-bold text-blue-500 ">
        Products
      </h2>
      <nav className="flex justify-between w-[70%] flex-row flex-wrap mt-5">
        {categoriesList.map((item) => (
          <ItemProduct key={item.id} item={item} />
        ))}
      </nav>
    </section>
  );
};

export default Products;
