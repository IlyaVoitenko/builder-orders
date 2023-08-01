import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import MenuList from "./MenuList";

const DropMenu = ({ arr, title }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="relative z-50">
      <button
        type="button"
        className="inline-flex justify-center items-center w-full "
        aria-haspopup="true"
        onMouseEnter={() => {
          setIsOpenMenu(true);
        }}
        onMouseLeave={() => {
          setIsOpenMenu(false);
        }}
      >
        {title} <BsChevronDown />
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
          className={`${
            isOpenMenu ? "absolute" : "hidden"
          }  w-56  origin-top-right bg-white rounded-md shadow-lg `}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <MenuList arr={arr} />
        </div>
      </Transition>
    </div>
  );
};

export default DropMenu;
