import React from "react";
import { Link } from "react-router-dom";
import { setSelectedProduct } from "../../../../store/reducer/categories";
import { useDispatch } from "react-redux";

const ItemProduct = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Link
      to={item.link}
      className="w-[21%] max-sm:w-[49%]"
      onClick={() => dispatch(setSelectedProduct(item))}
    >
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
