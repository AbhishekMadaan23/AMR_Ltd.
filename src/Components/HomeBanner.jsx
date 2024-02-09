import React, { useEffect, useState } from "react";

const slideImages = [
  {
    url: "https://images.pexels.com/photos/6156525/pexels-photo-6156525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    url: "https://www.wendtcorp.com/wp-content/uploads/2019/05/Newco-Modular-Automobile-Shredder-1.jpg",
  },
  {
    url: "https://wallpapercave.com/wp/wp5018746.jpg",
  },
];

const HomeBanner = () => {
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
    <div className="w-full h-[40vh] lg:h-[75vh]">
      <div className=" w-full h-full  ">
        <div className="relative  w-full h-full overflow-hidden">
          <div
            className="flex w-full h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slideImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className="h-full min-w-full bg-no-repeat bg-cover bg-center"
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

          <div class="absolute inset-9 shadow-md flex justify-center items-center bg-slate-300 bg-opacity-15 text-white">
            <div class="text-center">
              <h1 className="text-3xl lg:text-6xl font-bold font-serif animate-fade-in tracking-tighter leading-relaxed md:leading-10">
                Avery Metal Recycling
              </h1>
              <p class="text-md md:pt-2 lg:text-xl tracking-wider font-bold animate-fade-in">
                SCRAP METAL MERCHANT IN LONDON UK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
