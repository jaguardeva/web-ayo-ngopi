import React from "react";

export default function Team() {
  return (
    <div>
      <section className="max-w-[1240px] flex justify-center mx-auto p-4 text-white">
        <div className="py-10 md:py-32 flex flex-col gap-10 md:gap-28">
          <h1 className="text-2xl md:text-[40px] font-bold text-center">
            Meet Our Team
          </h1>

          <div className="grid md:grid-cols-3 gap-20 place-items-center  text-center">
            <div>
              <div>
                <img
                  src="/image/orang_1.jpg"
                  alt="orang_1"
                  className="rounded-full h-[250px] md:h-[300px]"
                />
              </div>
              <div className="mt-5">
                <h1 className="font-bold text-xl ">Chris Britt</h1>
                <h2 className="font-semibold text-2xl text-[#EAC696]">
                  CEO & CO-FOUNDER
                </h2>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="/image/orang_2.jpg"
                  alt="orang_1"
                  className="rounded-full h-[250px] md:h-[300px]"
                />
              </div>
              <div className="mt-5">
                <h1 className="font-bold text-xl ">James Barrese</h1>
                <h2 className="font-semibold text-2xl text-[#EAC696]">
                  CO-FOUNDER
                </h2>
              </div>
            </div>

            <div>
              <div className="grid place-content-center">
                <img
                  src="/image/orang_3.jpg"
                  alt="orang_1"
                  className="rounded-full h-[250px] md:h-[300px]"
                />
              </div>
              <div className="mt-5">
                <h1 className="font-bold text-xl ">Madhu Muthukumar</h1>
                <h2 className="font-semibold text-2xl text-[#EAC696]">
                  CHIEF PRODUCT OFFICER
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
