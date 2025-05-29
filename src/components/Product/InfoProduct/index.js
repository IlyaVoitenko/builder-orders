import React from "react";
import { useSelector } from "react-redux";
import { selectedProductSelector } from "../../../store/selectors";
import Navigation from "./Navigation";
import ImageProduct from "./ImageProduct";
import PriceAndName from "./PriceAndName";
import CurrentCategorie from "./CurrentCategorie";
import DescriptionProduct from "./DescriptionProduct";
import { Helmet } from "react-helmet-async";
const InfoProduct = () => {
  const product = useSelector(selectedProductSelector);

  return (
    <>
      <Helmet>
        <title>
          {product?.title} | {product.subcategorie || product.type}
        </title>
        <meta
          name="description"
          content={`The product ${
            product?.title
          } has high quality and is available for purchase. It belongs to the category ${
            product?.categorie
          } and subcategory ${
            product?.subcategorie || product?.type
          }. The price is ${product?.price}.`}
        />
        <link rel="canonical" href="https://builder-orders.vercel.app/" />
        <meta property="og:title" content="Categories page" />
        <meta
          property="og:description"
          content={`The product ${
            product?.title
          } has high quality and is available for purchase. It belongs to the category ${
            product?.categorie
          } and subcategory ${
            product?.subcategorie || product?.type
          }. The price is ${product?.price}.`}
        />
        <meta property="og:url" content="https://builder-orders.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex flex-col w-screen">
        <Navigation
          categorie={product.categorie}
          subcategorie={product.subcategorie || product.type}
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
    </>
  );
};

export default InfoProduct;
