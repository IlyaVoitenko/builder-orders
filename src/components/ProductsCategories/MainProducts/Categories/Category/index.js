import { translateSelector } from "../../../../../store/selectors";
import SubcategoryItem from "../SubcategoryItem";
import { useSelector } from "react-redux";

const Category = ({
  subcategories,
  categoryTranslator,
  titleCategory,
  isProductsCategoriesPage,
}) => {
  const fields = Object.keys(subcategories);
  const translate = useSelector(translateSelector);
  return (
    <div className=" w-64">
      <div className="text-left"> {translate[`${titleCategory}`]}</div>
      {fields &&
        fields.map((item, index) => (
          <SubcategoryItem
            item={item}
            key={index}
            isProductsCategoriesPage={isProductsCategoriesPage}
            categoryTranslator={categoryTranslator}
            subcategories={subcategories}
          />
        ))}
    </div>
  );
};

export default Category;
