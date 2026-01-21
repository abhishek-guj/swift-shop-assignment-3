import React, { useContext } from "react";
import { IoIosNotifications } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import useTheme from "../hooks/useTheme";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="h-10 fixed top-0 flex justify-between w-full border-b border-gray-500 bg-gray-100 text-black z-50 dark:text-white dark:bg-gray-800">
      <div className="flex items-center">
        <div className="w-40 border-r border-gray-500 font-black text-2xl dark:text-white">
          SS
        </div>
        <div className="px-4">Good Morning!</div>
      </div>
      <div className="flex justify-center items-center gap-4 p-4">
        <div onClick={toggleTheme} className="mr-10">
          {theme === "light" ? (
            <>
              <FaSun className="w-6 h-6" />
            </>
          ) : (
              <FaMoon className="w-6 h-6" />
          )}
        </div>
        <IoIosNotifications className="w-6 h-6" />
        <RiAccountCircleFill className="w-6 h-6" />
      </div>
    </nav>
  );
};

export default Navbar;
