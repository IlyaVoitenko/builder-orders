import React from "react";
import { useTranslation } from "react-i18next";
import SubcategorieItem from "../SubcategorieItem";

const Categorie = ({
  subcategories,
  сategorieTranslater,
  titleCatrgorie,
  isProductsCategoriesPage,
}) => {
  const fields = Object.keys(subcategories);
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-left"> {t(`${titleCatrgorie}`)}</div>
      {fields.map((item, index) => (
        <SubcategorieItem
          item={item}
          key={index}
          isProductsCategoriesPage={isProductsCategoriesPage}
          сategorieTranslater={сategorieTranslater}
          subcategories={subcategories}
        />
      ))}
    </div>
  );
};

export default Categorie;
