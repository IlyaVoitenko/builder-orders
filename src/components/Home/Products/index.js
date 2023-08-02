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
      link: "#",
    },
    {
      id: 2,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
      link: "#",
    },
    {
      id: 3,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
      link: "#",
    },
    {
      id: 4,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
      link: "#",
    },
    {
      id: 5,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
      link: "#",
    },
    {
      id: 6,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
      link: "#",
    },
    {
      id: 7,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
      link: "#",
    },
    {
      id: 8,
      src: logo,
      title: "EN-123",
      price: "€ 15.00",
      link: "#",
    },
  ];
  return (
    <section className="flex flex-col  items-center w-full flex-wrap mt-12">
      <h2 className="text-center text-4xl font-bold text-blue-500 ">
        Products
      </h2>
      <nav className="flex justify-between w-[70%] flex-row flex-wrap mt-5">
        {categoriesList.map((item) => (
          <ItemProduct key={item.id} item={item} />
        ))}
      </nav>
    </section>
  );
};

export default Products;
