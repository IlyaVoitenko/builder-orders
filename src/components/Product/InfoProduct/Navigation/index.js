import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navigation = ({ categorie, subcategorie, nameProduct }) => {
  const { t } = useTranslation();
  return (
    <nav>
      <Link to="/">{t("header.navigate.home")}</Link>/
      <Link to="/products-categories">
        {t(`productsCategories.categories.${categorie}.titleCategorie`)}
      </Link>
      /
      <Link to="/products-categories">
        {t(
          `productsCategories.categories.${categorie}.categoriesTypes.${subcategorie}`
        )}
      </Link>
      /<span>{nameProduct}</span>
    </nav>
  );
};

export default Navigation;
