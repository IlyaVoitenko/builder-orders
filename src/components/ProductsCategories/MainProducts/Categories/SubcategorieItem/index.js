import React from "react";
import { useTranslation } from "react-i18next";
import {
  setSelectedCategorie,
  setProducts,
} from "../../../../../store/reducer/categories";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SubcategorieItem = ({
  item,
  сategorieTranslater,
  isProductsCategoriesPage,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  console.log(isProductsCategoriesPage);
  return (
    <div
      className="text-left pl-5"
      onClick={() => {
        dispatch(setSelectedCategorie(item));
        dispatch(setProducts(сategorieTranslater));
        if (isProductsCategoriesPage) {
          navigate("/products-categories");
        }
      }}
    >
      {t(
        `productsCategories.categories.${сategorieTranslater}.categoriesTypes.${item}`
      )}
    </div>
  );
};

export default SubcategorieItem;
