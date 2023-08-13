import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navigation = ({ categorie, subcategorie, nameProduct }) => {
  const { t } = useTranslation();
  const home = t("header.navigate.home");
  return (
    <nav className="flex justify-center	">
      <Link to="/" className="pr-1 pl-1">
        {home.toLowerCase()}
      </Link>
      /
      <Link to="/products-categories" className="pr-1 pl-1">
        {t(`productsCategories.categories.${categorie}.titleCategorie`)}
      </Link>
      /
      <Link to="/products-categories" className="pr-1 pl-1">
        {t(
          `productsCategories.categories.${categorie}.categoriesTypes.${subcategorie}`
        )}
      </Link>
      /<span className="pr-1 pl-1">{nameProduct}</span>
    </nav>
  );
};

export default Navigation;
