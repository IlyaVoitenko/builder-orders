import React from "react";
import { translateSelector } from "../../../../store/selectors";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = ({ categorie, subcategorie, nameProduct }) => {
  const translate = useSelector(translateSelector);
  const home = translate?.header.navigate.home;
  const toLowerCaseSubcategorie = subcategorie.toLowerCase();

  return (
    <nav className="flex justify-center	">
      <Link to="/" className="pr-1 pl-1">
        {home.toLowerCase()}
      </Link>
      /
      <Link to="/products-categories" className="pr-1 pl-1">
        {
          translate?.productsCategories.categories[`${categorie}`]
            .titleCategorie
        }
      </Link>
      /
      <Link to="/products-categories" className="pr-1 pl-1">
        {
          translate?.productsCategories.categories[`${categorie}`]
            .categoriesTypes[`${toLowerCaseSubcategorie}`]
        }
      </Link>
      /<span className="pr-1 pl-1">{nameProduct}</span>
    </nav>
  );
};

export default Navigation;
