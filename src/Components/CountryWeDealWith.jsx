import React, { useEffect, useState } from "react";

const slideImages = [
  {
    url: "https://flagpedia.net/data/flags/w702/gb.webp",
  },

  {
    url: "https://flagpedia.net/data/flags/w702/us.webp",
  },
  {
    url: "https://flagpedia.net/data/flags/w702/ca.webp",
  },
  {
    url: "https://flagpedia.net/data/flags/w702/au.webp",
  },
  {
    url: "https://flagpedia.net/data/flags/w702/ca.webp",
  },
];

const CountryWeDealWith = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    setCurrentIndex(isFirstImage ? slideImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === slideImages.length - 1;
    setCurrentIndex(isLastImage ? 0 : currentIndex + 1);
  };

  return (
    <div className="my-5 ">
      <div className="w-full text-center">
        <p className="text-green-600 font-bold text-xl sm:text-3xl py-5">
          Country We Deal With
        </p>
      </div>
      <div className="w-full sm:w-[70vw] h-[20vh] lg:h-[30vh] mx-auto">
        <div className=" w-full h-full  ">
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="flex w-full h-full transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 40}%)` }}
            >
              {slideImages.map((image, index) => {
                return (
                  <div
                    key={index}
                    className=" bg-center mx-1 h-full min-w-60 bg-contain bg-no-repeat"
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                  />
                );
              })}
            </div>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 bg-white bg-opacity-50 text-lg flex items-center justify-center rounded-full cursor-pointer z-10"
              onClick={goToNext}
            >
              ❯
            </button>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 bg-white bg-opacity-50 text-lg flex items-center justify-center rounded-full cursor-pointer z-10"
              onClick={goToPrevious}
            >
              ❮
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryWeDealWith;
//className="h-full min-w-full bg-no-repeat bg-cover bg-center"
