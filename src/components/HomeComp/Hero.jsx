import React from "react";
import BGImg from "../../assets/bg-img.jpg";
import musicImg from "../../assets/music.png";
import { FaPlay } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative w-full h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${BGImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)",
        }}
      ></div>

      <div className="relative text-white flex items-center justify-center h-full ">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className=" text-[40px] sm:text-[80px] md:text-[120px] leading-relaxed text-center font-semibold mb-10 transition-all duration-100">
            SEGUN JOHNSON
          </h1>

          {/* PLAY BTN  */}
          <Link
            to="https://www.youtube.com/@isegunjohnson"
            className="relative flex items-center justify-center w-max"
          >
            {/* Animated white ring */}
            <span className="absolute w-24 h-24 rounded-full border-8 border-white breathing-ring"></span>

            {/* Red circle with your icon (unchanged) */}
            <span className="relative z-10 w-24 h-24 rounded-full bg-red-600 flex items-center justify-center">
              <FaPlay className="text-red-900  text-center ml-2 text-4xl" />
            </span>
          </Link>
        </div>
      </div>
      {/* buttom div */}
      {/* <div className="relative flex items-center justify-between w-full mt-3.5">
        <div className="absolute bottom-0 w-full flex flex-col md:flex-row space-y-8 md:space-y-0 items-center justify-between px-6 md:px-10 lg:px-16 xl:px-28">
          <div className=" w-64 flex justify-between items-center ">
            <div className="w-full">
              <img src={musicImg} alt="" />
            </div>
            <div className=" ml-12 w-full text-white">
              <div>
                <h1 className="text-3xl font-semibold">Mama</h1>
                <p>Apr 22, 2022</p>
              </div>
              <div className="mt-6">
                <p>Latest release</p>
              </div>
            </div>
          </div>
          <Link
            to="https://music.apple.com/ng/album/mama/1614173148?i=1614173149"
            className="border group border-red-600 bg-transparent hover:bg-red-600 px-8 py-2"
          >
            <IoMdPlay className="text-red-600 group-hover:text-white group-hover:bg-red-600  text-4xl" />
          </Link>
        </div>
      </div> */}
      {/* Bottom sticky div */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-10 lg:px-16 xl:px-28 mb-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex w-64 items-center">
            <img src={musicImg} className="w-24" />
            <div className="ml-6 text-white">
              <h1 className="text-3xl font-semibold">Mama</h1>
              <p>Apr 22, 2022</p>
              <p className="mt-4">Latest release</p>
            </div>
          </div>

          <Link
            to="https://music.apple.com/ng/album/mama/1614173148?i=1614173149"
            className="border group border-red-600 bg-transparent hover:bg-red-600 px-8 py-2"
          >
            <IoMdPlay className="text-red-600 group-hover:text-white text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
