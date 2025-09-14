import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { translateSelector } from "../../../../store/selectors";
import { validationCategoryName } from "../../../../utils/helpers";

const CurrentCategory = ({ subcategory, category }) => {
  const translate = useSelector(translateSelector);
  const toLowerCaseSubcategory = subcategory?.toLowerCase();
  const validSubcategory = validationCategoryName(toLowerCaseSubcategory);
  return (
    <article className="mt-5 w-full ">
      <p className="ml-10">
        {translate?.product.category}:
        <Link to={"/products-category"} className="text-blue-700 pl-2">
          {
            translate?.productsCategory.categories[`${category}`]
              .categoriesTypes[`${validSubcategory}`]
          }
        </Link>
      </p>
    </article>
  );
};

export default CurrentCategory;
