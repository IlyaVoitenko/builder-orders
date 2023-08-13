import React from "react";

const PriceAndName = ({ nameProduct, price }) => {
  return (
    <article>
      <p className="text-3xl text-blue-700 pl-4">{nameProduct}</p>
      <p className="text-3xl text-blue-700 pl-4 mt-4">{price}</p>
    </article>
  );
};

export default PriceAndName;
