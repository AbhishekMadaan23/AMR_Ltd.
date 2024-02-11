import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsTop(currentScrollPos < 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setMenuOpen(true);
  };
  const handleClickClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative h-12 lg:h-16">
      <div
        className={` py-4 md:py-2 ${isTop ? "absolute " : "fixed top-0 opacity-80"} bg-white w-full  z-40 flex justify-between  transition-top duration-2000`}
      >
        <div className="">
          <div className=" px-6 lg:px-10">
            <a href="/">
              <img
                className="w-14 h-18 md:w-20 md:h-23 rounded-lg "
                src="https://i.ibb.co/3BQ1Cxp/AMRLOgo-FInal-fotor-2024020821659.jpg "
                alt="Amr"
              />
            </a>
          </div>
        </div>

        <div className=" hidden lg:flex flex-2 mx-10  ">
          <div className=" lg:mx-10 tracking-wider text-xl text-gray-800 hover:underline hover:text-green-700">
            <a href="/">Home</a>
          </div>
          <div className="md:mx-5 lg:mx-10 text-xl tracking-wide text-gray-800 hover:underline hover:text-green-700">
            <a href="/about-us">About us</a>
          </div>
          <div className="md:mx-5 lg:mx-10 tracking-wider text-xl text-gray-800 hover:underline hover:text-green-700">
            <a href="/purchase-info">Purchase info</a>
          </div>
          <div className="md:mx-5 lg:mx-10 tracking-wider text-xl  text-gray-800 hover:underline hover:text-green-700">
            <a href="/photos">Photos</a>
          </div>
          <div className="md:mx-5 lg:smx-10 tracking-wider text-xl text-gray-800 hover:underline hover:text-green-700">
            <a href="/contact">Contact us</a>
          </div>
        </div>

        <div className="lg:hidden px-6 " onClick={handleClick}>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>

      <div
        className={` inset-0 ${
          menuOpen
            ? "fixed right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 "
            : "hidden"
        } lg:hidden `}
      >
        <div className="flex mx-5 justify-between">
          <div className="my-10 text-white text-bold text-center">
            <img
              className="w-20 h-23 rounded-lg mt-3"
              src="https://i.ibb.co/3BQ1Cxp/AMRLOgo-FInal-fotor-2024020821659.jpg "
              alt="Amr"
            />
          </div>
          <div
            className="my-10 text-white text-bold text-center"
            onClick={handleClickClose}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>

        <div>
          <div className="my-10 px-5 text-white text-bold ">
            <a href="/">Home</a>
          </div>
          <hr class="w-full border-gray-400" />
          <div className="my-10 px-5 text-white text-bold ">
            <a href="/about-us">About us</a>
          </div>
          <hr class="w-full border-gray-400" />
          <div className="my-10 px-5 text-white text-bold ">
            <a href="/purchase-info">Purchase Info</a>
          </div>
          <hr class="w-full border-gray-400" />
          <div className="my-10 px-5 text-white text-bold ">
            <a href="/photos"> Photos</a>
          </div>
          <hr class="w-full border-gray-400" />
          <div className="my-10 px-5 text-white text-bold ">
            <a href="/contact"> Contact us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
