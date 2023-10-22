import React from "react";
import { translateSelector } from "../../../../store/selectors";
import Categorie from "./Categorie";
import { useSelector } from "react-redux";
import { categories } from "./constants";

const Categories = ({ isProductsCategoriesPage = false }) => {
  const translate = useSelector(translateSelector);
  return (
    <div
      className={`flex flex-col  max-lg:mt-4${
        isProductsCategoriesPage
          ? "w-[64rem] max-lg:w-full pl-3  border-l-2 border-blue-500"
          : " pl-3 lg:w-80 max-lg:mt-5 border-r-2  border-blue-500"
      }`}
    >
      <span className="text-blue-500 ">
        {" "}
        {translate?.productsCategories.title}
      </span>
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
