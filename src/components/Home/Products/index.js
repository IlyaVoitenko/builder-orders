import React from "react";
import ItemProduct from "./ItemProduct";
import logo from "../Sliders/three.jpg";
const Products = () => {
  const categoriesList = [
    {
      id: 1,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
    },
    {
      id: 2,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
    },
    {
      id: 3,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
    },
    {
      id: 4,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
    },
    {
      id: 5,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
    },
    {
      id: 6,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
    },
    {
      id: 7,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
    },
    {
      id: 8,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
    },
  ];
  return (
    <div className="flex flex-col  items-center w-full flex-wrap mt-5">
      <h2 className="text-center text-4xl font-bold text-blue-500 ">
        Products
      </h2>
      <div className="flex justify-between w-[70%] flex-row flex-wrap mt-5">
        {categoriesList.map((item) => (
          <ItemProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
