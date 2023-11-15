import React from "react";
import {
  setSelectedCategorie,
  setProducts,
} from "../../../../../store/reducer/categories";
import {
  translateSelector,
  selectedCategorieSelector,
} from "../../../../../store/selectors";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SubcategorieItem = ({
  item,
  сategorieTranslater,
  isProductsCategoriesPage,
}) => {
  const dispatch = useDispatch();
  const translate = useSelector(translateSelector);
  const selectedCategorie = useSelector(selectedCategorieSelector);
  const navigate = useNavigate();

  return (
    <div
      className={`text-left pl-5 cursor-pointer
      ${selectedCategorie === item && "text-blue-600"}
      `}
      onClick={() => {
        dispatch(setSelectedCategorie(item));
        dispatch(setProducts(сategorieTranslater));
        if (isProductsCategoriesPage) {
          navigate("/products-categories");
        }
      }}
    >
      {
        translate?.productsCategories.categories[сategorieTranslater]
          .categoriesTypes[item]
      }
    </div>
  );
};

export default SubcategorieItem;
