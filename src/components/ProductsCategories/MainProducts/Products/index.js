import React from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../../../store/selectors";
import ProductsList from "../../../Home/Products/ProductsList";

const Products = () => {
  const products = useSelector(productsSelector);
  return <ProductsList products={products} page={"products"} />;
};

export default Products;
