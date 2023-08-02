import React from "react";
import Info from "./Info";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex flex-col">
      <Info />
      <Navbar />
    </header>
  );
};

export default Header;
