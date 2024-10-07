import React from "react";
import { useSelector } from "react-redux";
import { selectedProductSelector } from "../../../store/selectors";
import Navigation from "./Navigation";
import ImageProduct from "./ImageProduct";
import PriceAndName from "./PriceAndName";
import CurrentCategorie from "./CurrentCategorie";
import DescriptionProduct from "./DescriptionProduct";

const InfoProduct = () => {
  const product = useSelector(selectedProductSelector);
  return (
    <div className="flex flex-col w-screen">
      <Navigation
        categorie={product.categorie}
        subcategorie={product.type}
        nameProduct={product.title}
      />
      <div className=" flex flex-row max-lg:flex-col  justify-center	mt-3">
        <ImageProduct image={product.src} nameProduct={product.title} />
        <div className="flex flex-col justify-center items-center ">
          <PriceAndName nameProduct={product.title} price={product.price} />
          <CurrentCategorie
            subcategorie={product.type}
            categorie={product.categorie}
          />
        </div>
      </div>
      <div className=" flex justify-end">
        <DescriptionProduct price={product.price} />
      </div>
    </div>
  );
};

export default InfoProduct;
