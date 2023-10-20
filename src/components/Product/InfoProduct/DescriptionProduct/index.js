import React from "react";
import { translateSelector } from "../../../../store/selectors";
import { useSelector } from "react-redux";

const DescriptionProduct = ({ price }) => {
  const translate = useSelector(translateSelector);
  return (
    <article className="flex flex-col w-[74%]	pl-2 mt-7 border-l-2  border-blue-500 text-left">
      <p>
        {translate?.product.discription.unitPrice} :{" "}
        <span className="text-blue-500">{price}</span>
      </p>
    </article>
  );
};

export default DescriptionProduct;
