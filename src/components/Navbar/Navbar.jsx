import React from "react";
import { MENU_LIST } from "./MenuList";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-full text-white shadow-lg">
      <header className=" h-24 max-w-[1240px] flex justify-between items-center mx-auto px-4 ">
        <Link to="/">
          <h1 className="font-bold text-2xl md:text-4xl uppercase">
            ayo<span className="text-[#EAC696] italic">ngopi.</span>
          </h1>
        </Link>

        <nav className="hidden lg:flex">
          <ul className="flex justify-center items-center w-full">
            {MENU_LIST.map((menu, index) => {
              return (
                <li key={index}>
                  <Link
                    to={menu.path}
                    className={`py-2 px-7 ml-4 cursor-pointer font-normal ease-in-out duration-150 rounded-full ${
                      isActive(menu.path)
                        ? "text-[#65451F] bg-[#EAC696]"
                        : "hover:text-[#65451F] hover:bg-[#EAC696]"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}
