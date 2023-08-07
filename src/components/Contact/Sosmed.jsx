import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";

export default function Sosmed() {
  return (
    <div className="w-full text-white">
      <section className="max-w-[1240px] h-[calc(100vh-96px)] flex mx-auto p-4 text-white">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="py-5 flex flex-col gap-4">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#EAC696] ">
                Contact Us!
              </h1>
              <p className="text-[18px] md:text-xl lg:text-2xl font-medium ">
                Our partner relation, ready to help you!
              </p>
            </div>
            <div className="flex items-center gap-5 font-medium text-[16px] lg:text-2xl">
              <HiOutlineMail className="text-[30px] md:text-6xl" />
              <p>ayongopi@gmail.com</p>
            </div>
            <div className="flex items-center gap-5 font-medium text-[16px] lg:text-2xl">
              <IoLocation className="text-[50px] md:text-6xl" />
              <p>Jl. Ahmad yani No. 30, Pekarungan - Sukodono - Sidoarjo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
