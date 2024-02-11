import React from "react";

const PurchaseInfo = () => {
  return (
    <div>
      <div className="text-center mt-20 md:mt-24">
        <h2 className="text-xl md:text-2xl tracking-tight text-gray-600">
          What we buy & sell
        </h2>
        <p className=" w-[90%] md:w-1/2 font-semibold leading-5 mx-auto  mt-5 md:mt-8 text-md md:text-lg text-center  text-gray-600">
          We buy & sell All Non ferrous metal scrap at competitive prices for
          more information get in touch with us
          <label className="text-green-700 underline">Here</label>
        </p>
      </div>
      <div className="mt-20 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6">
        <div className="">
          <div
            className="h-60 w-60 bg-cover bg-center bg-no-repeat rounded-full mx-auto"
            style={{
              backgroundImage: `url("https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/1520195771560.jfif/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:365,h:365,cg:true")`,
            }}
          ></div>
          <h2 className="text-center bold underline pt-2 text-lg md:text-xl">
            Aluminium trump
          </h2>
        </div>
        <div className="">
          <div
            className="h-60 w-60 bg-cover bg-center bg-no-repeat rounded-full mx-auto"
            style={{
              backgroundImage: `url("https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/brass-honey-scrap-2025846.jpg/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365")`,
            }}
          ></div>
          <h2 className="text-center pt-2 text-lg md:text-xl bold underline ">
            Brass
          </h2>
        </div>
        <div className="">
          <div
            className="h-60 w-60 bg-cover bg-center bg-no-repeat rounded-full mx-auto"
            style={{
              backgroundImage: `url("https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/alu-rims-x-f9f.jpg/:/cr=t:0%25,l:13.22%25,w:73.56%25,h:100%25/rs=w:365,h:365,cg:true")`,
            }}
          ></div>
          <h2 className="text-center bold underline  pt-2 text-lg md:text-xl">
            Aluminium wheels
          </h2>
        </div>
        <div className="">
          <div
            className="h-60 w-60 bg-cover bg-center bg-no-repeat rounded-full mx-auto"
            style={{
              backgroundImage: `url("https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/IMG_2666%20(Small).JPG/:/cr=t:5.36%25,l:16.52%25,w:66.96%25,h:89.29%25/rs=w:365,h:365,cg:true,m")`,
            }}
          ></div>
          <h2 className="text-center pt-2 text-lg bold underline  md:text-xl">
            Ubc
          </h2>
        </div>
        <div className="">
          <div
            className="h-60 w-60 bg-cover bg-center bg-no-repeat rounded-full mx-auto"
            style={{
              backgroundImage: `url("https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/P1140090.JPG/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:365,h:365,cg:true")`,
            }}
          ></div>
          <h2 className="text-center pt-2 text-lg bold underline  md:text-xl">
            Zorba
          </h2>
        </div>
        <div className="">
          <div
            className="h-60 w-60 bg-cover bg-center bg-no-repeat rounded-full mx-auto"
            style={{
              backgroundImage: `url("https://img1.wsimg.com/isteam/ip/11c8983d-4225-4c21-a4f1-3a36bc1cba39/WhatsApp%20Image%202023-02-24%20at%2009.16.20%20(2).jpeg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:365,h:365,cg:true")`,
            }}
          ></div>
          <h2 className="text-center pt-2 bold underline  text-lg md:text-xl">
            Aluminium Taint tabour
          </h2>
        </div>
      </div>
      <button>button</button>
    </div>
  );
};

export default PurchaseInfo;
