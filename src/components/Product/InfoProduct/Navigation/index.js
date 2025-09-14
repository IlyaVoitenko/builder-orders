import React from "react";
import { translateSelector } from "../../../../store/selectors";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { validationCategoryName } from "../../../../utils/helpers";

const Navigation = ({ category, subcategory, nameProduct }) => {
  const translate = useSelector(translateSelector);
  const home = translate?.header.navigate.home;
  const toLowerCaseSubcategory = subcategory?.toLowerCase();
  const validSubcategory = validationCategoryName(toLowerCaseSubcategory);
  console.log(translate, "translate");
  console.log("category", category, "-----", validSubcategory);
  return (
    <nav className="flex justify-center	">
      <Link to="/" className="pr-1 pl-1">
        {home.toLowerCase()}
      </Link>
      /
      <Link to="/products-category" className="pr-1 pl-1">
        {translate?.productsCategory.categories[category].titleCategory}
      </Link>
      /
      <Link to="/products-category" className="pr-1 pl-1">
        {
          translate?.productsCategory.categories[category].categoriesTypes[
            validSubcategory
          ]
        }
      </Link>
      /<span className="pr-1 pl-1">{nameProduct}</span>
    </nav>
  );
};

export default Navigation;
