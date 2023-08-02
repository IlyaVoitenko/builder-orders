import React from "react";

const ItemCategorie = ({ item }) => {
  return (
    <figure className="flex flex-col  mt-5 items-center w-[45%]">
      <img src={item.src} className="w-full" alt={item.title} />
      <figcaption className="mt-3 font-bold text-blue-500">
        {item.title}
      </figcaption>
      <p className="text-left mt-3">{item.text}</p>
      <nav className="mt-3">
        <a href={item.link}>
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            info more
          </button>
        </a>
      </nav>
    </figure>
  );
};

export default ItemCategorie;
