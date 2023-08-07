import React from "react";
import LIST_MENU from "./List";
import FormatRupiah from "../../utils/formatRupiah";

export default function Card() {
  return (
    <div className="w-full">
      <section className=" max-w-[1400px] flex flex-col gap-5 justify-center mx-auto p-4 mb-36 text-[#65451f]">
        <div>
          <h1 className="text-[#EAC696] font-bold text-4xl md:text-5xl  lg:text-7xl my-5">
            Our Menu
          </h1>
        </div>
        <div>
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl my-5">
            Makanan
          </h1>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-y-10 gap-x-5">
          {LIST_MENU.filter((menu) => menu.kategori === "makanan").map(
            (menu, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#EAC696] rounded-3xl p-9 h-full w-[320px] md:w-[400px] flex flex-col justify-between"
                >
                  <div>
                    <div>
                      <img
                        src={menu.image}
                        alt={menu.name}
                        className="h-[200px] md:h-[250px] rounded-full"
                      />
                    </div>

                    <div className="flex flex-col my-7 gap-3 md:mr-10">
                      <h1 className="text-[24px] md:text-4xl font-bold">
                        {menu.name}
                      </h1>
                      <p className="text-[18xl] md:text-[19px] font-medium">
                        {menu.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-16">
                    <p className="text-2xl md:text-2xl font-medium uppercase">
                      Price :
                    </p>
                    <p className="text-2xl md:text-3xl font-semibold">
                      {FormatRupiah(menu.price)}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div>
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl my-5">
            Minuman
          </h1>
        </div>

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-y-12 ">
          {LIST_MENU.filter((menu) => menu.kategori === "minuman").map(
            (menu, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#EAC696] rounded-3xl p-9 h-full w-[320px] md:w-[400px] flex flex-col justify-between"
                >
                  <div>
                    <div>
                      <img
                        src={menu.image}
                        alt={menu.name}
                        className="h-[200px] md:h-[250px] rounded-full"
                      />
                    </div>

                    <div className="flex flex-col my-7 gap-3 md:mr-10">
                      <h1 className="text-[24px] md:text-4xl font-bold">
                        {menu.name}
                      </h1>
                      <p className="text-[18xl] md:text-[19px] font-medium">
                        {menu.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-16">
                    <p className="text-2xl md:text-2xl font-medium uppercase">
                      Price :
                    </p>
                    <p className="text-2xl md:text-3xl font-semibold">
                      {FormatRupiah(menu.price)}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
}
