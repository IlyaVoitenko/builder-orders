import React from "react";
import Info from "./Info";
import Form from "./Form";

const Main = () => {
  return (
    <div className="flex flex-row max-lg:flex-col mt-10 justify-center items-center">
      <Info />
      <Form />
    </div>
  );
};

export default Main;
