import React from "react";
import { categories } from "./helper";
import { useTranslation } from "react-i18next";
import Categorie from "./Categorie";

const Categories = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <span> {t(`productsCategories.title`)}</span>
      <Categorie
        subcategories={categories.facadeStucco}
        сategorieTranslater={"facadeStucco"}
        titleCatrgorie={
          "productsCategories.categories.facadeStucco.titleCategorie"
        }
      />
      <Categorie
        subcategories={categories.internal}
        сategorieTranslater={"internal"}
        titleCatrgorie={"productsCategories.categories.internal.titleCategorie"}
      />
    </div>
  );
};

export default Categories;
