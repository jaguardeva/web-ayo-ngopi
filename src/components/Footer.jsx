import React from "react";
import { MENU_LIST } from "./Navbar/MenuList";
import { Link } from "react-router-dom";
import {
  BiLogoWhatsapp,
  BiLogoFacebook,
  BiLogoInstagram,
} from "react-icons/bi";

export default function Footer() {
  return (
    <div className="w-full bg-[#EAC696] text-[#000300] py-7">
      <footer className=" max-w-[1240px] flex mx-auto  px-4">
        <div className="grid md:grid-cols-3 gap-y-9">
          <div className="flex flex-col gap-3">
            <Link to="/">
              <h1 className="font-bold text-2xl md:text-4xl uppercase text-white">
                ayo<span className="text-[#65451f] italic">ngopi.</span>
              </h1>
            </Link>
            <p className="text-[16px] md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              error incidunt maxime saepe nisi delectus! Amet voluptates
              sapiente perferendis. Labore.
            </p>
          </div>
          <div className="flex flex-row justify-center mt-0 md:mt-12 gap-5 md:gap-10 text-[#65451f] md:text-6xl text-5xl">
            <BiLogoWhatsapp className="cursor-pointer md:hover:scale-150 ease-in-out duration-150" />
            <BiLogoFacebook className="cursor-pointer md:hover:scale-150 ease-in-out duration-150" />
            <BiLogoInstagram className="cursor-pointer md:hover:scale-150 ease-in-out duration-150" />
          </div>
          <div>
            <ul className="flex md:flex-row flex-col md:gap-0 gap-4 justify-center mt-0 md:mt-12 w-full">
              {MENU_LIST.map((menu, index) => {
                return (
                  <li key={index}>
                    <a
                      href={menu.path}
                      className="w-full text-[16px] md:text-xl py-3 px-5 ml-0 md:ml-4 cursor-pointer font-normal ease-in-out duration-150 hover:text-white
                      "
                    >
                      {menu.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="mt-10 text-[14px] md:text-xl text-center md:text-left">
            Created By Jaguar Deva &copy;2023
          </p>
        </div>
      </footer>
    </div>
  );
}
