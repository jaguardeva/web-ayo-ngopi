import React from "react";
import Cangkir from "/public/secangkirkopi.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="text-white md:bg-gradient-to-r from-[#2b1e0e]">
      <section className="w-full max-w-[1420px] h-[calc(100vh-96px)] flex flex-col justify-center items-center mx-auto px-4 py-10 ">
        <div className="grid md:grid-cols-2 content-center">
          <div className="">
            <img src={Cangkir} alt="foto-kopi.png" className="w-[3000px]" />
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-[24px] md:text-5xl text-[#EAC696] font-bold">
              SECANGKIR <span className="text-white">KOPI</span>
            </h1>

            <p className="text-[16px] md:text-[22px] text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              repudiandae velit mollitia eveniet modi debitis aperiam? Dolor
              pariatur nulla architecto?
            </p>
            <Link to="/menu">
              <button className=" text-[16px] md:text-[22px] py-3 md:py-4 px-5 md:px-8 font-medium rounded-lg shadow-lg bg-[#EAC696]  text-[#65451f] hover:bg-opacity-80 uppercase">
                Our Menu
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
