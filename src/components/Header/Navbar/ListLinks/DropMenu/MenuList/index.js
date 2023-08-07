import React from "react";
import MenuItem from "../MenuItem";

const MenuList = ({ arr, linkText }) => {
  return (
    <nav className=" bg-white " role="none">
      {arr.map((item, index) => (
        <MenuItem item={item} key={index} index={index} linkText={linkText} />
      ))}
    </nav>
  );
};

export default MenuList;
