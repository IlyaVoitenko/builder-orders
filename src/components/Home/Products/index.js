import React from "react";
import { translateSelector } from "../../../store/selectors";
import { categoriesList } from "../../../utils/helpers/HomeProducts";
import TitleProducts from "./TitleProducts";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";

const Products = () => {
  const translate = useSelector(translateSelector);
  return (
    <section className=" flex flex-col  items-center w-full flex-wrap mt-12">
      <TitleProducts translate={translate} />
      <ProductsList products={categoriesList} page={"home"} />
    </section>
  );
};

export default Products;
