import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div>
        <div className="w-full bg-green-800 text-center">
          <p className="text-white font-bold text-2xl sm:text-4xl py-5">
            Testimonials
          </p>
        </div>
      </div>
      <div className="w-full py-5 sm:py-10 sm:px-48 bg-green-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="col-span-1 text-center w-[85%] mx-auto bg-white ">
          <img
            className="mx-auto w-24 h-24 rounded-full mt-4"
            src="https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/2021.12.10_2353_black_sweter_6.jpg/:/cr=t:0%25,l:48.48%25,w:35.71%25,h:23.81%25/rs=w:100,h:100,cg:true,m"
          />
          <div className="mt-5 sm:mt-10"> Stars</div>
          <div className="mt-5 sm:mt-10 px-3 sm:px-6">"Excellent service"</div>
          <div className="mt-7 sm:12 mb-5 sm:mb-10 text-gray-600 bold ">
            NATASA
          </div>
        </div>
        <div className="col-span-1 text-center w-[85%] mx-auto bg-white ">
          <img
            className="mx-auto w-24 h-24 rounded-full mt-4"
            src="https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/pexels-photo-6822987.jpeg/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100"
          />
          <div className="mt-5 sm:mt-10"> Stars</div>
          <div className="mt-5 sm:mt-10 px-3 sm:px-6">
            "Always a great service, very helpful and friendly staff. Access is
            good and makes it easy to be in and out quickly"
          </div>
          <div className="mt-7 sm:12 mb-5 sm:mb-10 text-gray-600 bold ">
            MARVICK
          </div>
        </div>
        <div className="col-span-1 text-center w-[85%] mx-auto bg-white ">
          <img
            className="mx-auto w-24 h-24 rounded-full mt-4"
            src="https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/pexels-jeff-denlea-3714743.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:66.64%25/rs=w:100,h:100,cg:true"
          />
          <div className="mt-5 sm:mt-10"> Stars</div>
          <div className="mt-5 sm:mt-10 px-3 sm:px-6">
            "Very good experience Staff professional and friendly Definitely use
            this company for future trades"
          </div>
          <div className="mt-7 sm:12 mb-5 sm:mb-10 text-gray-600 bold ">
            NATASA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
