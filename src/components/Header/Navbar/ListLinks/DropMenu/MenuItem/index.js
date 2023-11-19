import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setProducts,
  setSelectedCategorie,
} from "../../../../../../store/reducer/categories";
import { goToTop } from "../../../../../../utils/helpers";

const MenuItem = ({ item, index, linkText }) => {
  const { categorie, subcategorie } = item;
  const dispatch = useDispatch();
  return (
    <Link
      to={item.link}
      onClick={() => {
        dispatch(setSelectedCategorie(subcategorie));
        dispatch(setProducts(categorie));
        goToTop();
      }}
      className={`${
        index === 0 && "border-t-4 border-t-blue-500"
      } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 `}
      role="menuitem"
    >
      {linkText}
    </Link>
  );
};

export default MenuItem;
