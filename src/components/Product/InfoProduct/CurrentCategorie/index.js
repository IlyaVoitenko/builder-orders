import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CurrentCategorie = ({ subcategorie, categorie }) => {
  const { t } = useTranslation();
  return (
    <article className="mt-5 w-full ">
      <p className="ml-10">
        {t(`product.categorie`)}:
        <Link to={"/products-categories"} className="text-blue-700 pl-2">
          {t(
            `productsCategories.categories.${categorie}.categoriesTypes.${subcategorie}`
          )}
        </Link>
      </p>
    </article>
  );
};

export default CurrentCategorie;
