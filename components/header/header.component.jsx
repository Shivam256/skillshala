import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { BsHeart, BsCart, BsBell, BsPersonCircle } from "react-icons/bs";
import ProfileDropdown from "./headerDropdowns";

import Link from 'next/link';
const Header = () => {
  const [dropdownStates, setDropdownStates] = useState({
    profileDropdown: false,
  });
  return (
    <div className="w-screen h-16 flex items-center justify-between px-5 md:px-10 lg:px-12 shadow-md fixed bg-white z-50 top-0">
      <div className="flex items-center w-3/4 ">
        <BiMenu color="black" size={25} className="block md:hidden mr-3" />
        <Link href="/">
          <h3 className="mr-10 text-lg md:text-xl lg:text-2xl cursor-pointer ">skillshala</h3>
        </Link>
        <input
          type="text"
          className="w-2/4 rounded-sm h-8 border border-gray-400 px-2"
        />
      </div>
      <div className="flex space-x-7 md:space-x-7  lg:space-x-10 items-center">
        <BsHeart color="black" size={25} />
        <BsCart color="black" size={25} />
        <BsBell color="black" size={25} className="hidden md:block" />
        <BsPersonCircle
          color="black"
          size={25}
          className="group hidden md:block cursor-pointer"
          onMouseEnter={() => {
            setDropdownStates({ ...dropdownStates, profileDropdown: true });
          }}
        />
        <ProfileDropdown
          state={dropdownStates.profileDropdown}
          toggleDropdown={() => {
            setDropdownStates({ ...dropdownStates, profileDropdown: false });
          }}
        />
      </div>
    </div>
  );
};

export default Header;
