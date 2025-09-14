import React from "react";
import { useSelector } from "react-redux";
import { selectedProductSelector } from "../../../store/selectors";
import Navigation from "./Navigation";
import PriceAndName from "./PriceAndName";
import CurrentCategory from "./CurrentCategory";
import DescriptionProduct from "./DescriptionProduct";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
const InfoProduct = () => {
  const product = useSelector(selectedProductSelector);
  const { nameProduct } = useParams();
  return (
    <>
      <Helmet>
        <title>
          Stuckwerkstatt Voitenko | {product?.title} |{" "}
          {product.subcategory || product.type}
        </title>
        <meta
          name="description"
          content={`The product ${
            product?.title
          } has high quality and is available for purchase. It belongs to the category ${
            product?.categorie
          } and subcategory ${
            product?.subcategory || product?.type
          }. The price is ${product?.price}.`}
        />
        <link rel="canonical" href={`https://builder-orders.vercel.app/`} />
        <meta
          property="og:title"
          content={`Stuckwerkstatt Voitenko | ${product?.title} | ${
            product.subcategory || product.type
          }
`}
        />
        <meta
          property="og:description"
          content={`The product ${
            product?.title
          } has high quality and is available for purchase. It belongs to the category ${
            product?.category
          } and subcategory ${
            product?.subcategory || product?.type
          }. The price is ${product?.price}.`}
        />
        <meta
          property="og:url"
          content={`https://builder-orders.vercel.app/product/${nameProduct}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://builder-orders.vercel.app/${product.src}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Stuckwerkstatt Voitenko | ${product?.title} | ${
            product.subcategory || product.type
          }`}
        />
        <meta
          name="twitter:description"
          content={`The product ${
            product?.title
          } has high quality and is available for purchase. It belongs to the category ${
            product?.category
          } and subcategory ${
            product?.subcategory || product?.type
          }. The price is ${product?.price}.`}
        />
        <meta
          name="twitter:image"
          content="https://builder-orders.vercel.app/logoWeb.png"
        />
      </Helmet>
      <div className="flex flex-col w-screen 2xl:h-[80vh]">
        <Navigation
          category={product.category}
          subcategory={product.subcategory || product.type}
          nameProduct={product.title}
        />
        <div className=" flex flex-row max-lg:flex-col  justify-center max-lg:items-center	mt-3">
          <img
            src={product.src}
            alt={product.title}
            className="w-2/6 max-lg:w-full max-w-[500px] max-h-[500px] "
          />
          <div className="flex flex-col justify-center items-center max-md:mt-[1rem]">
            <PriceAndName nameProduct={product.title} price={product.price} />
            <CurrentCategory
              subcategory={product.type}
              category={product.category}
            />
          </div>
        </div>
        <div className=" flex justify-end max-md:mb-[1rem]">
          <DescriptionProduct price={product.price} />
        </div>
      </div>
    </>
  );
};

export default InfoProduct;
