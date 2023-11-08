import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { translateSelector } from "../../../../store/selectors";

const CurrentCategorie = ({ subcategorie, categorie }) => {
  const translate = useSelector(translateSelector);
  const toLowerCaseSubcategorie = subcategorie.toLowerCase();

  return (
    <article className="mt-5 w-full ">
      <p className="ml-10">
        {translate?.product.categorie}:
        <Link to={"/products-categories"} className="text-blue-700 pl-2">
          {
            translate?.productsCategories.categories[`${categorie}`]
              .categoriesTypes[`${toLowerCaseSubcategorie}`]
          }
        </Link>
      </p>
    </article>
  );
};

export default CurrentCategorie;
