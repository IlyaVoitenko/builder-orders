import React from "react";

const ItemCategorie = ({ item }) => {
  return (
    <div className="flex flex-col  mt-5 items-center w-[45%]">
      <img src={item.src} className="w-full" alt="" />
      <h3 className="mt-3 font-bold text-blue-500">{item.title}</h3>
      <span className="text-left mt-3">{item.text}</span>
      <a href={item.link} className="text-left mt-3 ">
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          info more
        </button>
      </a>
    </div>
  );
};

export default ItemCategorie;
