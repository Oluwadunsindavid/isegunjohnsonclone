import React from "react";
import segun from "../../assets/abt-img.jpg";

const About = () => {
  return (
    <div id="about" className="py-6 md:py-24 px-6 md:px-10 lg:px-16 xl:px-28 flex flex-col md:flex-row bg-[#f8f9fa]">
      {/* Image wrapper with overlay */}
      <div className="relative rounded-2xl w-full group overflow-hidden">
        <img
          src={segun}
          className="rounded-2xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          alt=""
        />

        {/* Gradient overlay from top to bottom */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-black/30 to-black/10"></div>
      </div>

      <div className="w-full md:pl-10 pt-6 md:pt-0">
        <h1 className="text-4xl font-bold text-center">
          About <span className="text-red-600">Segun Johnson</span>
        </h1>
        <div className="w-28 h-1 bg-orange-500 mx-auto mt-4"></div>
        <p className="text-black leading-relaxed text-[1.1rem]">
          Music began for Segun Johnson at a tender age as a local drummer in
          the church. His musical journey evolved as he transitioned into
          singing at 24 and launched his professional career as a crossover live
          band artist at 25.
        </p>
        <p className="text-gray-500 mt-2 text-[1.1rem]">
          International Sensation: Segun has sold out venues across continents,
          including London's Broadway Theatre,{" "}
          <span className="font-medium">Cargo Coventry (UK)</span>, Terra
          Kulture Arena (Lagos), and The Opera House (Toronto) - just a few
          among his many sold-out shows worldwide.
        </p>
        <h2 className="text-2xl text-gray-800 font-semibold mt-4 mb-4">
          Media Appearances
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-red-600 rounded-full mt-2"></span>
            Sunrise Daily on Channels TV
          </li>

          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-red-600 rounded-full mt-2"></span>
            Teju Baby Face Show
          </li>

          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-red-600 rounded-full mt-2"></span>
            Wake Up Nigeria on Television Continental
          </li>

          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-red-600 rounded-full mt-2"></span>
            African Magic Owambe Show (2020, 2022)
          </li>

          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-red-600 rounded-full mt-2"></span>
            Factory 78 (UK YouTube/Radio)
          </li>

          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-red-600 rounded-full mt-2"></span>
            Punch Newspaper & City People Magazine
          </li>
        </ul>
        <h2 className="text-2xl text-gray-800 font-semibold mt-4 mb-4">
          Corporate Performances
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-red-600 rounded-full mt-2"></span>
            Nigerian British Chamber of Commerce
          </li>

          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-red-600 rounded-full mt-2"></span>
            Promasidor Nigeria Limited
          </li>

          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-red-600 rounded-full mt-2"></span>
            Grandoak Limited
          </li>

          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-red-600 rounded-full mt-2"></span>
            Meristem Nigeria
          </li>

          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-red-600 rounded-full mt-2"></span>
            Numerous A-list weddings and events in Lagos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
