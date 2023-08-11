import React from "react";
import { categoriesList } from "./helper";
import { useTranslation } from "react-i18next";
import TitleProducts from "./TitleProducts";
import ProductsList from "./ProductsList";

const Products = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col  items-center w-full flex-wrap mt-12">
      <TitleProducts translate={t} />
      <ProductsList products={categoriesList} page={"home"} />
    </section>
  );
};

export default Products;
