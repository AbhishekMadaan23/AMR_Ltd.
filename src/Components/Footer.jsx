import React from "react";

const Footer = () => {
  return (
    <div>
      <div class=" mt-6 bg-green-800 text-white mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div class="flex flex-col justify-center items-center col-span-1 md:col-span-2 lg:col-span-1  ">
            <div>
              <img
                className="w-24 h-16 mt-3"
                src="https://i.ibb.co/3BQ1Cxp/AMRLOgo-FInal-fotor-2024020821659.jpg "
                alt="Amr"
              />
            </div>
            <div className="mt-4 tracking-wider leading-8">
              "Recycling Tomorrow's Resources, Today!"
            </div>
          </div>
          <div class="flex pt-4 flex-col md:justify-center items-center  col-span-1 md:col-span-2 lg:col-span-1 text-center">
            <div className="mt-1 mb-3 underline text-lg">Company</div>
            <div className="my-1">Home</div>
            <div className="my-1">About us</div>
            <div className="my-1">Purchase info</div>
            <div className="my-1">Contact us</div>
          </div>
          <div class=" leading-7 flex flex-col justify-center items-center p-4 col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="bold underline mb-4 text-lg sm:text-xl">
              Contact Info
            </h2>
            <div className="">
              <div className="text-center font-semibold">
                Registered Address:
              </div>
              <div className="text-center ">
                144-146 King's Cross Road, WC1X 9DU, London, United Kingdom
              </div>
            </div>
            <div className="text-center mt-2 ">
              <div className="font-semibold">Trading Address:</div>
              <div>56 Treen Avenue, London SW13 0JT, United Kingdom</div>
            </div>
            <div className="text-center mt-2">
              +44 7741 915120, +44 7765 030257
            </div>
            <div className="text-center mt-2">
              Info@averymetalrecycling.co.uk
            </div>
            <div className="text-center ">
              Accounts@averymetalrecycling.co.uk
            </div>
          </div>
        </div>
        <hr className="h-0.5 " />
        <div>
          <div class="flex justify-center items-center py-1">
            <div class="text-center">
              <p class="text-sm">
                &copy; 2024 Avery Metal Recycling. All Rights Reserved.
              </p>
              <p class="text-sm">Designed and Developed by: Abhishek</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
