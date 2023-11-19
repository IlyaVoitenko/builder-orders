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
import { goToTop } from "../../../../../utils/helpers";

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
        console.log(
          "сategorieTranslater : ",
          сategorieTranslater,
          " ",
          "setSelectedCategorie :",
          item
        );
        dispatch(setSelectedCategorie(item));
        dispatch(setProducts(сategorieTranslater));
        goToTop();
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
