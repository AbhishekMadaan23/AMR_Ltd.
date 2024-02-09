import React from "react";

const AboutSection = () => {
  return (
    <div className="w-ful py-6">
      <div className="w-full ">
        <h1 className="text-center text-gray-600 text-2xl lg:text-4xl leading-10 tracking-tight font-bold p-4 pb-2">
          Company Profile
        </h1>
        <div className="text-center w-full mb-7">
          <hr className=" mx-auto w-1/2 sm:w-1/4 h-0.5 bg-slate-300" />
        </div>
      </div>
      <div className="w-full  ">
        <div className=" text-lime-600 md:w-3/5 mx-1 sm:mx-auto mb-2">
          <p className=" text-lg md:text-xl text-center   ">
            Welcome to Avery Metal - Your Trusted Scrap Metal Recycling Partner
            in London
          </p>
        </div>
        <p className=" md:w-3/5 mx-2 text-left sm:mx-auto tracking-wide">
          At AMR, we are dedicated to providing top-notch scrap metal recycling
          services in London and surrounding areas. With years of experience in
          the industry, we have earned a reputation for reliability, efficiency,
          and integrity. We offer comprehensive scrap metal collection services
          tailored to meet your specific needs. Whether you're a homeowner,
          contractor, or industrial facility, we have the expertise and
          resources to efficiently collect your scrap metal.
        </p>
      </div>
      {/* <div class="flex justify-center mt-3 mb-10">
    <img
      src="https://certbodies.co.uk/wp-content/uploads/2021/03/ISO-certification-scaled.jpeg"
      alt="Quality Certified Logo 1"
      class="w-30 h-20 mx-8 my-5"
    />
    <img
      src="https://trustseal.indiamart.com/trustseal-logos/trustseal.gif"
      alt="Quality Certified Logo 2"
      class="w-16 h-16 mx-8 my-5"
    />
  </div> */}
    </div>
  );
};

export default AboutSection;
