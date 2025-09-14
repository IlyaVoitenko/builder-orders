import React from "react";
import { translateSelector } from "../../../../store/selectors";
import { useSelector } from "react-redux";

const DescriptionProduct = ({ item }) => {
  const translate = useSelector(translateSelector);
  return (
    <article className="flex flex-col w-[74%]	pl-2 mt-7 border-l-2  border-blue-500 text-left">
      <span>
        {translate?.product?.description?.unitPrice}{" "}
        <span className="text-blue-500">
          {item.price} {item.description?.size}
        </span>
      </span>
    </article>
  );
};

export default DescriptionProduct;
