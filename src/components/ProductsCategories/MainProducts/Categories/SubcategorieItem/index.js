import React from "react";
import { useTranslation } from "react-i18next";
import {
  setSelectedCategorie,
  setProducts,
} from "../../../../../store/reducer/categories";
import { useDispatch } from "react-redux";

const SubcategorieItem = ({ item, subcategories, сategorieTranslater }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div
      className="text-left pl-5"
      onClick={() => {
        dispatch(setSelectedCategorie(item));
        dispatch(setProducts(сategorieTranslater));
      }}
    >
      {t(
        `productsCategories.categories.${сategorieTranslater}.categoriesTypes.${item}`
      )}
    </div>
  );
};

export default SubcategorieItem;
