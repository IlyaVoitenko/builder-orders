import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item, index, linkText }) => {
  return (
    <Link
      to={item.link}
      className={`${
        index === 0 && "border-t-4 border-t-blue-500"
      } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 `}
      role="menuitem"
    >
      {linkText}
    </Link>
  );
};

export default MenuItem;
