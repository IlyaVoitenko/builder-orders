import React from "react";
import Info from "./Info";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex flex-col">
      <Info />
      <Navbar />
    </div>
  );
};

export default Header;
