import React from "react";
import { translateSelector } from "../../../../../store/selectors";
import SubcategorieItem from "../SubcategorieItem";
import { useSelector } from "react-redux";

const Categorie = ({
  subcategories,
  сategorieTranslater,
  titleCatrgorie,
  isProductsCategoriesPage,
}) => {
  const fields = Object.keys(subcategories);
  const translate = useSelector(translateSelector);

  return (
    <div className=" w-64">
      <div className="text-left"> {translate[`${titleCatrgorie}`]}</div>
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
