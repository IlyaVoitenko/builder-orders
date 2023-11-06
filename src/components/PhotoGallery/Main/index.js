import React from "react";
import Title from "./Title";
import Gallery from "../Gallery";

const Main = () => {
  return (
    <main className="flex flex-col  items-center justify-center text-left ">
      <Title />
      <Gallery />
    </main>
  );
};

export default Main;
