import React, { useEffect, useState, useRef } from "react";
import { MENU_LIST } from "./MenuList";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineX, HiMenuAlt2 } from "react-icons/hi";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleMenuItemClick = () => {
    setNav(false);
  };

  const closeSidebar = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener("mousedown", closeSidebar);
    } else {
      document.removeEventListener("mousedown", closeSidebar);
    }

    return () => {
      document.removeEventListener("mousedown", closeSidebar);
    };
  }, [!nav]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-full text-white shadow-lg sticky top-0 lg:relative bg-[#65451F] lg:bg-transparent">
      <header className=" h-24 max-w-[1240px] flex justify-between items-center mx-auto px-4 ">
        <Link to="/">
          <h1 className="font-bold text-2xl md:text-4xl uppercase">
            ayo<span className="text-[#EAC696] italic">ngopi.</span>
          </h1>
        </Link>

        <ul className=" hidden md:flex  items-center justify-center">
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
        <div onClick={handleNav} className="block lg:hidden z-50">
          {nav ? <HiOutlineX size={30} /> : <HiMenuAlt2 size={30} />}
        </div>
        <aside
          ref={sidebarRef}
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] h-full bg-[#38250b] ease-in-out duration-200 z-50"
              : "fixed left-[-100%]"
          }
        >
          <div className="h-24 flex items-center px-4">
            <Link to="/">
              <h1 className="font-bold text-2xl md:text-4xl uppercase">
                ayo<span className="text-[#EAC696] italic">ngopi.</span>
              </h1>
            </Link>
          </div>

          <ul className="p-4 uppercase">
            <Link to="/" onClick={handleMenuItemClick}>
              {" "}
              <li className={`p-4 border-b border-gray-400 `}>Home</li>
            </Link>

            <Link to="/about" onClick={handleMenuItemClick}>
              <li className={`p-4 border-b border-gray-400 `}>About</li>
            </Link>

            <Link to="/menu" onClick={handleMenuItemClick}>
              <li className={`p-4 border-b border-gray-400 `}>Menu</li>
            </Link>

            <Link to="/contact" onClick={handleMenuItemClick}>
              <li className={`p-4 $`}>Contact</li>
            </Link>
          </ul>
        </aside>
      </header>
    </div>
  );
}
