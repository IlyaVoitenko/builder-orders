import React from "react";
import { Link } from "react-router-dom";
import {
  setProducts,
  setSelectedCategorie,
} from "../../../../store/reducer/categories";
import { useDispatch } from "react-redux";
import { goToTop } from "../../../../utils/helpers";

const ItemProduct = ({ item }) => {
  const dispatch = useDispatch();

  const { categorie, subcategorie } = item;
  return (
    <Link
      to={item.link}
      className="w-[21%] max-sm:w-[49%]"
      onClick={() => {
        goToTop();
        dispatch(setSelectedCategorie(subcategorie));
        dispatch(setProducts(categorie));
      }}
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
