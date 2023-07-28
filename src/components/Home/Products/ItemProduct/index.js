import React from "react";

const ItemProduct = ({ item }) => {
  return (
    <div className="flex flex-col  mt-5   w-[22%]">
      <img src={item.src} className="w-full" alt="" />
      <h3 className="text-left mt-3 font-bold text-blue-500">{item.title}</h3>
      <span className="text-left mt-3">{item.price}</span>
    </div>
  );
};

export default ItemProduct;
