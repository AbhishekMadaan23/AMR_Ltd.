import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="relative">
      <div className="flex justify-between my-2 sm:my-4  ">
        {/* /// */}
        <div className=" md:mx-9">
          <div className=" px-10">Logo</div>
        </div>
        <div className="lg:hidden mx-6 " onClick={handleClick}>
          icon
        </div>
        {/* //// */}
        <div className=" hidden lg:flex flex-2 mx-10  ">
          <div className="md:mx-5 lg:mx-10 text-xl text-gray-600">Home</div>
          <div className="md:mx-5 lg:mx-10 text-xl text-gray-600">About us</div>
          <div className="md:mx-5 lg:mx-10 text-xl  text-gray-600">
            Purchase info
          </div>
          <div className="md:mx-5 lg:mx-10 text-xl  text-gray-600">Photos</div>
          <div className="md:mx-5 lg:smx-10 text-xl text-gray-600">
            Contact us
          </div>
        </div>
      </div>
      <div
        className={` inset-0 ${
          menuOpen
            ? "fixed right-0 z-30 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 "
            : "hidden"
        } sm:hidden `}
      >
        <div className="flex mx-5 justify-between">
          <div className="my-10 text-white text-bold text-center">Logo</div>
          <div
            className="my-10 text-white text-bold text-center"
            onClick={handleClick}
          >
            Close
          </div>
        </div>

        <div>
          <div className="my-10 px-5 text-white text-bold ">Home</div>
          <div className="my-10 px-5 text-white text-bold ">About us</div>
          <div className="my-10 px-5 text-white text-bold ">Purchase Info</div>
          <div className="my-10 px-5 text-white text-bold ">Gallery</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
