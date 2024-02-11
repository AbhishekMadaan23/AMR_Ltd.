import React, { useState } from "react";

const slideImages = [
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.35.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.36.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.59.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.56.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.35.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.36.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.59.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.56.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.35.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.36.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.59.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.56.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.35.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.21.36.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.59.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-04-27%20at%2010.22.56.jpeg/:/",
  },

  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-07-04%20at%2012.06.04%20AM.jpeg/:/",
  },
];

const PhotosComponent = () => {
  const [current, setCurrent] = useState(0);

  const goToPrev = () => {
    setCurrent(current === 0 ? slideImages.length - 1 : current - 1);
  };
  const gotToNext = () => {
    setCurrent(current === slideImages.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="mb-24 mt-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold  leading-7 text-gray-600 sm:text-4xl">
          Photos
        </h2>
        <hr className="border-gray-600 mt-4 w-3/4 mx-auto h-0.5" />
      </div>
      {/* Container */}
      <div className="  h-[35vh] w-[90vw] md:w-[70vw] lg:w-[70vw] lg:h-[70vh] mt-16 mx-auto">
        {/* Wrapper it'll overflow */}
        <div className="relative  w-full h-full overflow-hidden">
          <div
            className="flex w-full h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${current * 30}%)` }}
          >
            {/* images */}
            {slideImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-full bg-cover bg-center min-w-[40%] mx-3"
                  style={{ backgroundImage: `url(${image.url})` }}
                ></div>
              );
            })}
          </div>
          <button
            className="absolute top-[50%] left-5 bg-white"
            onClick={goToPrev}
          >
            ❰
          </button>
          <button
            className="absolute top-[50%] right-10 bg-white "
            onClick={gotToNext}
          >
            ❱
          </button>
        </div>
      </div>

      <div className=" h-[12vh] w-[70vw] lg:block hidden mt-8 mx-auto">
        <div className=" relative h-full w-full overflow-hidden ">
          <div
            className="flex h-full w-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${current * 5}%)` }}
          >
            {slideImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[5vw] h-full bg-contain bg-no-repeat mx-2"
                  style={{ backgroundImage: `url(${image.url})` }}
                  onClick={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>
          <button
            className="absolute top-[50%] left-5 bg-white"
            onClick={goToPrev}
          >
            ❰
          </button>
          <button
            className="absolute top-[50%] right-10 bg-white "
            onClick={gotToNext}
          >
            ❱
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotosComponent;
