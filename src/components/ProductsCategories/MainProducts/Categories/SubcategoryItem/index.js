import React, { useEffect } from "react";
import {
  setSelectedCategory,
  setProducts,
} from "../../../../../store/reducer/categories";
import {
  translateSelector,
  selectedCategorySelector,
  selectedProductSelector,
} from "../../../../../store/selectors";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { goToTop } from "../../../../../utils/helpers";

const SubcategoryItem = ({
  item,
  categoryTranslator,
  isProductsCategoriesPage,
}) => {
  const dispatch = useDispatch();
  const translate = useSelector(translateSelector);
  const selectedCategory = useSelector(selectedCategorySelector);
  const selectedProduct = useSelector(selectedProductSelector);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);
  console.log(
    "selectedCategory",
    selectedCategory,
    "----------",
    selectedProduct.type,
    "----------",
    item
  );

  if (selectedProduct.type === selectedCategory) {
    console.log(true);
  } else {
    console.log(false);
  }
  return (
    <div
      className={`text-left pl-5 cursor-pointer
      ${selectedProduct.type === item ? "text-blue-600" : ""}
      `}
      onClick={() => {
        dispatch(setSelectedCategory(item));
        dispatch(setProducts(categoryTranslator));
        goToTop();
        if (isProductsCategoriesPage) {
          navigate("/products-category");
        }
      }}
    >
      {
        translate?.productsCategory.categories[categoryTranslator]
          .categoriesTypes[item]
      }
    </div>
  );
};

export default SubcategoryItem;
