import React from "react";
import ProductsList from "../../../Home/Products/ProductsList";

const Products = ({ product }) => {
  return <ProductsList products={product} page={"products"} />;
};

export default Products;
