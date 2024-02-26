import React from "react";

const TitleProducts = ({ translate }) => {
  return (
    <h2 className="text-center text-4xl font-bold text-blue-500 ">
      {translate?.home?.products?.title}
    </h2>
  );
};

export default TitleProducts;
