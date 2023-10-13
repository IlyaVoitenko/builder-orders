import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import MenuList from "./MenuList";

const DropMenu = ({ arr, title }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { t } = useTranslation();
  const condition = `${title}.title`;
  const buttonTitle = t(condition);

  return (
    <div className="lg:relative z-40">
      <button
        type="button"
        className="inline-flex justify-center items-center max-lg:w-screen"
        aria-haspopup="true"
        onMouseEnter={() => {
          setIsOpenMenu(true);
        }}
        onMouseLeave={() => {
          setIsOpenMenu(false);
        }}
      >
        {t(`${buttonTitle}`)}&nbsp;{" "}
        {isOpenMenu ? <BsChevronUp /> : <BsChevronDown />}
      </button>

      <Transition
        show={isOpenMenu}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          onMouseEnter={() => setIsOpenMenu(true)}
          onMouseLeave={() => setIsOpenMenu(false)}
          className={`${isOpenMenu ? "lg:absolute  0" : "hidden"} 
           w-56 max-lg:w-screen origin-top-right  rounded-md lg:pt-[60px]  `}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <MenuList arr={arr} linkText={title} />
        </div>
      </Transition>
    </div>
  );
};

export default DropMenu;
