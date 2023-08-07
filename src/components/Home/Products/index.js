import React from "react";
import ItemProduct from "./ItemProduct";
import { categoriesList } from "./helper";
import { useTranslation } from "react-i18next";
const Products = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col  items-center w-full flex-wrap mt-12">
      <h2 className="text-center text-4xl font-bold text-blue-500 ">
        {t("home.products.title")}
      </h2>
      <nav className="flex justify-between w-[70%] max-sm:w-[90%] flex-row flex-wrap mt-5">
        {categoriesList.map((item) => (
          <ItemProduct key={item.id} item={item} />
        ))}
      </nav>
    </section>
  );
};

export default Products;
