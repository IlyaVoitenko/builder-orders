import React from "react";
import { useSelector } from "react-redux";
import { selectedProductSelector } from "../../../store/selectors";
import Navigation from "./Navigation";

const InfoProduct = () => {
  const product = useSelector(selectedProductSelector);
  console.log(product);
  return (
    <div className="flex flex-col">
      <Navigation
        categorie={product.categorie}
        subcategorie={product.type}
        nameProduct={product.title}
      />
    </div>
  );
};

export default InfoProduct;
