import React from "react";
import Title from "./Title";
import Gellery from "../Gellery";

const Main = () => {
  return (
    <main className="flex flex-col  items-center justify-center text-left ">
      <Title />
      <Gellery />
    </main>
  );
};

export default Main;
