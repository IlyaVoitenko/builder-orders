import React from "react";
import { Link } from "react-router-dom";

const ItemProduct = ({ item }) => {
  return (
    <Link link={item.link} className="w-[21%]">
      <figure className="flex flex-col  mt-5  ">
        <img src={item.src} className="w-full" alt="" />
        <figcaption className="text-left mt-3 font-bold text-blue-500">
          {item.title}
        </figcaption>
        <p className="text-left mt-3">{item.price}</p>
      </figure>
    </Link>
  );
};

export default ItemProduct;
