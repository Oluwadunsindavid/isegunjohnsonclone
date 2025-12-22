import React from "react";
import bgImg from "../../assets/bg-music.webp";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";
// You can hide the background image section on every page except the Home page by detecting the current route using useLocation() from React Router.
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Contact = () => {
  const location = useLocation();
  // find the path
  const isHomePage = location.pathname === "/";

  return (
    <div className="w-full">
      {/* TOP SECTION WITH BACKGROUND + FADE */}
      {/* Also shows the image below only in the home page ONLY and does not appear in other pages */}
      {isHomePage && (
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <div
            className="relative w-full h-[350px] bg-cover bg-center flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage: `url(${bgImg})`,
            }}
          >
            {/* Optional Dark Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            {/* Fade at bottom */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[rgb(0,29,56)]/60 to-[rgb(0,29,56)]"></div>

            {/* Content above fade */}
            <h1 className="text-5xl text-center font-bold z-10 mb-6">Contact For RSVP</h1>

            <Link
              to="#"
              className="z-10 bg-red-600 text-white px-10 py-3 font-semibold hover:bg-transparent border border-red-600 hover:text-red-600 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </motion.h2>
      )}

      {/* LOWER SECTION (same deep blue background) */}
      <div className="bg-[rgb(0,29,56)] text-white py-6 md:pt-24 px-6 md:px-10 lg:px-16 xl:px-28 grid md:grid-cols-2 gap-28 pb-32">
        {/* Left side */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Services</h2>

          <div className=" flex gap-10">
            <input
              type="email"
              placeholder="Enter your mail"
              className="bg-transparent border-b border-gray-500 w-full py-2 outline-none"
            />

            <button className="mt-6 px-10 py-2 bg-red-600 hover:bg-transparent border border-red-600 cursor-pointer white hover:text-red-600 transition-all duration-300">
              Subscribe
            </button>
          </div>

          <p className="mt-6 text-gray-300">
            Subscribe be the first to get notified when a new song is released
          </p>
        </div>

        {/* Right side */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Contact Me</h2>

          <p className="mb-4">aqoreemusicent@gmail.com</p>
          <p className="mb-4">+234-808-690-0421</p>
          <p className="mb-8">
            5 Gbadebo Ibikunle Street, Xtadok estate, Ajah, Lagos
          </p>

          {/* Icons */}
          <div className="flex space-x-4 mt-6">
            <Link
              to="https://web.facebook.com/isegunjohnson?_rdc=1&_rdr#"
              className="w-10 h-10 bg-[#3b5998] rounded-full flex items-center justify-center"
            >
              <i className=" text-white">
                <FaFacebook />
              </i>
            </Link>
            <Link
              to="https://x.com/isegunjohnson"
              className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center"
            >
              <i className="text-white">
                <FaTwitter />
              </i>
            </Link>
            <Link
              to="https://www.youtube.com/@isegunjohnson"
              className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center"
            >
              <i className=" text-white">
                <FaYoutube />
              </i>
            </Link>
            <Link
              to="https://www.instagram.com/isegunjohnson/#"
              className="w-10 h-10 bg-[#C13584] rounded-full flex items-center justify-center"
            >
              <i className=" text-white">
                <FaInstagram />
              </i>
            </Link>
          </div>
        </div>
      </div>
      {/* bottom links*/}
      <div className="bg-[rgb(0,29,56)] px-6 md:px-10 lg:px-16 xl:px-28 grid grid-cols-1 md:grid-cols-2 text-gray-300 items-center pb-20 ">
        <div>
          <p className="text-sm flex justify-baseline items-center">
            Copyright © 2025 All rights reserved | Made with{" "}
            <BiHeart className="mx-2" /> by{" "}
            <span className="text-red-500 ml-1"> iBeep</span>
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap gap-6 w-full ">
            <HashLink
              smooth
              to="/#home"
              className="text-sm px-3 py-2 rounded-md font-medium text-gray-500 transition-all duration-300 hover:text-white"
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#about"
              className="text-sm px-3 py-2 rounded-md font-medium text-gray-500 transition-all duration-300 hover:text-white"
            >
              About
            </HashLink>
            <HashLink
              smooth
              to="/#tracks"
              className="text-sm px-3 py-2 rounded-md font-medium text-gray-500 transition-all duration-300 hover:text-white"
            >
              Tracks
            </HashLink>
            <NavLink
              to="/contact"
              className="text-sm px-3 py-2 rounded-md font-medium text-gray-500 transition-all duration-300 hover:text-white"
            >
              Events
            </NavLink>
            <NavLink
              to="/contact"
              className="text-sm px-3 py-2 rounded-md font-medium text-gray-500 transition-all duration-300 hover:text-white"
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
