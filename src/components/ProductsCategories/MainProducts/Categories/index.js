import React from "react";
import { categories } from "./helper";
import { useTranslation } from "react-i18next";
import Categorie from "./Categorie";

const Categories = ({ isProductsCategoriesPage = false }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex flex-col ${
        isProductsCategoriesPage
          ? "w-[64rem] max-lg:w-full pl-3  border-l-2 border-blue-500"
          : "border-r-2 pr-3 border-blue-500"
      }`}
    >
      <span className="text-blue-500 "> {t(`productsCategories.title`)}</span>
      <Categorie
        subcategories={categories.facadeStucco}
        сategorieTranslater={"facadeStucco"}
        isProductsCategoriesPage={isProductsCategoriesPage}
        titleCatrgorie={
          "productsCategories.categories.facadeStucco.titleCategorie"
        }
      />
      <Categorie
        subcategories={categories.internal}
        isProductsCategoriesPage={isProductsCategoriesPage}
        сategorieTranslater={"internal"}
        titleCatrgorie={"productsCategories.categories.internal.titleCategorie"}
      />
    </div>
  );
};

export default Categories;
