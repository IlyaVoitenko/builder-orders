import React from "react";
import { categories } from "../../../../utils/helpers/ProductsCategories";
import { useTranslation } from "react-i18next";
import Categorie from "./Categorie";

const Categories = ({ isProductsCategoriesPage = false }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex flex-col  max-lg:mt-4${
        isProductsCategoriesPage
          ? "w-[64rem] max-lg:w-full pl-3  border-l-2 border-blue-500"
          : " pl-3 lg:w-80 max-lg:mt-5 border-r-2  border-blue-500"
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
