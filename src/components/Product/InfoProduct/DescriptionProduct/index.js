import React from "react";
import { useTranslation } from "react-i18next";

const DescriptionProduct = ({ price }) => {
  const { t } = useTranslation();
  return (
    <article className="flex flex-col w-[74%]	pl-2 mt-7 border-l-2  border-blue-500 text-left">
      <p>
        {t(`product.discription.unitPrice`)} :{" "}
        <span className="text-blue-500">{price}</span>
      </p>
    </article>
  );
};

export default DescriptionProduct;
