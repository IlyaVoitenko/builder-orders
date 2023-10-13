import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuItem = ({ item, index, linkText }) => {
  const { t } = useTranslation();

  const links = `${linkText}.links.link-${index}`;
  return (
    <Link
      to={item.link}
      className={`${
        index === 0 && "border-t-4 border-t-blue-500"
      } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 `}
      role="menuitem"
    >
      {t(links)}
    </Link>
  );
};

export default MenuItem;
