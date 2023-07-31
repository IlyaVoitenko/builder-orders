import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import MenuList from './MenuList'

const DropMenu = ({arr,title}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        type="button"
        className="inline-flex justify-center items-center w-full "
        aria-haspopup="true"
        onMouseEnter={()=> setIsOpen(true)}
        onMouseLeave={()=> setIsOpen(false)}
      >
       {title} <BsChevronDown/>
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
          <div
            className={`${
              isOpen ? "absolute" : "hidden"
            }  w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <MenuList arr={arr}/>
          </div>
      </Transition>
    </div>
  );
};

export default DropMenu;
