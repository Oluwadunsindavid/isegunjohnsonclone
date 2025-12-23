import React, { useState } from "react";
import UpcomingPastEvents from "../../components/HomeComp/UpcomingPastEvents";
import at1 from "../../assets/attendee1.webp";
import at2 from "../../assets/attendee2.webp";
import at3 from "../../assets/attendee3.webp";
import at4 from "../../assets/attendee4.webp";
import at5 from "../../assets/attendee5.webp";
import at6 from "../../assets/attendee6.webp";
import at7 from "../../assets/attendee7.webp";
import at8 from "../../assets/attendee8.webp";
import at9 from "../../assets/attendee9.webp";
import at10 from "../../assets/attendee10.webp";
import at11 from "../../assets/attendee11.webp";
import at12 from "../../assets/attendee12.webp";
import at13 from "../../assets/0.webp";
import at14 from "../../assets/1.webp";
import at15 from "../../assets/2.webp";
import at16 from "../../assets/3.webp";
import at17 from "../../assets/4.webp";
import at18 from "../../assets/5.webp";
import at19 from "../../assets/6.webp";
import at20 from "../../assets/7.webp";
import at21 from "../../assets/8.webp";
import at22 from "../../assets/9.webp";
import at23 from "../../assets/10.webp";
import at24 from "../../assets/11.webp";
import at25 from "../../assets/12.webp";
import at26 from "../../assets/13.webp";
import at27 from "../../assets/14.webp";
import at28 from "../../assets/15.webp";
import at29 from "../../assets/16.webp";
import at30 from "../../assets/17.webp";
import at31 from "../../assets/18.webp";
import at32 from "../../assets/19.webp";
import at33 from "../../assets/20.webp";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const details = [
  { image: at1, desc: "Washington DC Event", category: "Washington DC" },
  { image: at2, desc: "Washington DC Event", category: "Washington DC" },
  { image: at3, desc: "Washington DC Event", category: "Washington DC" },
  { image: at4, desc: "Washington DC Event", category: "Washington DC" },
  { image: at5, desc: "New York Event", category: "New York" },
  { image: at6, desc: "New York Event", category: "New York" },
  { image: at7, desc: "London Event", category: "London Ontario" },
  { image: at8, desc: "London Event", category: "London Ontario" },
  { image: at9, desc: "London Event", category: "London Ontario" },
  { image: at10, desc: "London Event", category: "London Ontario" },
  { image: at11, desc: "London Event", category: "London Ontario" },
  { image: at12, desc: "London Event", category: "London Ontario" },
  { image: at13, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at14, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at15, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at16, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at17, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at18, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at19, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at20, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at21, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at22, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at23, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at24, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at25, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at26, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at27, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at28, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at29, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at30, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at31, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at32, desc: "Los Angeles Event", category: "Los Angeles" },
  { image: at33, desc: "Los Angeles Event", category: "Los Angeles" },
];

const PEG = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Events");

  // Filter Logic
  const filteredEvents =
    selectedCategory === "All Events"
      ? details
      : details.filter((item) => item.category === selectedCategory);

  return (
    <motion.h2
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="md:py-24 px-2 sm:px-24 xl:px-36 ">
        {/* px-24 md:px-36  */}
        {/* Title */}
        <motion.h2
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <div className="text-center font-medium text-[28px] sm:text-[33px] leading-relaxed text-[rgb(0,29,56)] transition-transform duration-300 pt-10 sm:pt-2">
            <h2 className="">Past Event Galleries</h2>
            <p className="text-[16px] text-gray-400 font-normal">
              Relive the memories from our sold-out events
            </p>
          </div>
        </motion.h2>
        {/* Filter Buttons */}
        <motion.h2
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <section className="px-6 md:px-10 lg:px-16 xl:px-4 flex items-center justify-center flex-wrap py-12 bg-white gap-2 sm:gap-4">
            {[
              { name: "All Events", Desc: "All Events" },
              { name: "Washington DC", Desc: "Washington DC" },
              { name: "Los Angeles", Desc: "Los Angeles" },
              { name: "London Ontario", Desc: "London Ontario" },
            ].map((btn) => (
              <button
                key={btn.name}
                onClick={() => setSelectedCategory(btn.name)}
                className={`px-3 py-2 font-semibold transition-all duration-300 rounded-full m-1 flex items-center justify-center text-[16px] cursor-pointer ${
                  selectedCategory === btn.name
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-transparent border-2 border-orange-500  hover:bg-orange-500 text-orange-500 hover:text-white"
                }`}
              >
                <i className="mr-2">{btn.icon}</i> <p>{btn.Desc}</p>
              </button>
            ))}
          </section>
        </motion.h2>
        {/* Image Section */}
        <motion.h2
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-16">
            {filteredEvents.map((detail, index) => (
              <div
                key={index}
                className="relative w-full h-64 overflow-hidden rounded-lg group"
              >
                {/* Image */}
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  src={detail.image}
                  alt=""
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
                  <p className=" text-[16px] font-light text-gray-400">
                    {detail.desc}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Link to="https://www.instagram.com/isegunjohnson/#">
                      <i className="text-white hover:text-orange-500 cursor-pointer">
                        <FaInstagram />
                      </i>
                    </Link>
                    <Link to="https://web.facebook.com/isegunjohnson?_rdc=1&_rdr#">
                      <i className="text-white hover:text-orange-500 cursor-pointer">
                        <FaFacebookF />
                      </i>
                    </Link>
                    <Link to="https://x.com/isegunjohnson">
                      <i className="text-white hover:text-orange-500 cursor-pointer">
                        <FaTwitter />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.h2>
        <motion.h2
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <UpcomingPastEvents padding="px-0" />
          {/* px-24 md:px-36  */}
        </motion.h2>
      </div>
    </motion.h2>
  );
};

export default PEG;
