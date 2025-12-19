// Use for the event page and contact page Hero sections
import React from "react";
import BGImg from "./assets/Segun10.webp"

const ReuseableHero = ({ text1, text2 }) => {
  return (
    <div
      className="relative w-full h-[350px] lg:h-[550px] bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${BGImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%)",
        }}
      ></div>
      <div className=" relative flex justify-center items-center h-full">
        <h2 className="text-center font-medium text-[20px] sm:text-[33px] md:text-[40px] leading-relaxed text-white transition-transform duration-300">
          {text1} <br />
          <span className="font-muli text-[18px]">
            {text2}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default ReuseableHero;
