import React, { useState, useEffect } from "react";
import Link from "next/link";

const DropdownLink = ({ link, name }) => (
  <Link href={link} className="w-full text-blue-500 font-medium ">
    <a className="w-full text-blue-500 font-medium hover:bg-blue-500 hover:text-white px-2 py-1 rounded-md transition-all ease-in">{name}</a>
  </Link>
);

const ProfileDropdown = ({ state, toggleDropdown }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(state);
  }, [state]);

  const handleMouseLeave = () => {
    setIsVisible(false);
    toggleDropdown();
  };

  return (
    <div
      className={`absolute right-10 top-16 mt-2 w-52 h-fit rounded-md  bg-white px-3 py-3 shadow-lg flex flex-col space-y-2  ${
        isVisible ? "block" : "hidden"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <DropdownLink link="/courses/ll" name="My Courses" />
      <DropdownLink link="/courses/ll" name="My Cart" />
      <DropdownLink link="/courses/ll" name="Wishlist" />
      <DropdownLink link="/courses/ll" name="Become an instructor" />
      <DropdownLink link="/courses/ll" name="Settings" />
      <DropdownLink link="/courses/ll" name="Logout" />
    </div>
  );
};

export default ProfileDropdown;
