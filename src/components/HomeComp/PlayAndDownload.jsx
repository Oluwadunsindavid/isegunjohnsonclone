import React from "react";
import { IoMdPlay } from "react-icons/io";
import audiomack from "../../assets/audiomack.webp";
import tidal from "../../assets/tidal.webp";
import deezer from "../../assets/deezer.webp";
import Spotify from "../../assets/Spotify.webp";
import Apple from "../../assets/Apple Music.webp";
import { Link } from "react-router-dom";

const PlayAndDownload = () => {
  const details = [
    { img: audiomack, link: "https://audiomack.com/isegunjohnson" },
    { img: tidal, link: "https://tidal.com/artist/25180611" },
    { img: deezer, link: "https://www.deezer.com/us/artist/133620952" },
    {
      img: Spotify,
      link: "https://open.spotify.com/artist/3YhrjVtLqR6E4ST4NjhA9G",
    },
    {
      img: Apple,
      link: "https://music.apple.com/cd/album/daddy-single/1651424295",
    },
  ];
  return (
    <div id="tracks" className="py-6 md:py-24 px-6 sm:px-60 md:px-80 lg:px-120">
      {/* title */}
      <div className="flex items-center justify-center gap-8">
        <div className="border group border-red-600 bg-transparent hover:bg-red-600 px-1 py-1 rounded-lg">
          <IoMdPlay className="text-red-600 group-hover:text-white group-hover:bg-red-600 text-4xl mx-auto" />
        </div>
        <h2 className="text-3xl font-bold text-center">
          Play and <br className="md:hidden" /> download below
        </h2>
      </div>
      {/* apps */}
      {details.map((detail, index) => (
        <div
          key={index}
          className="flex items-center justify-between gap24 w-full mt-12"
        >
          <div key={index} className=" border p-2 w-40">
            <img src={detail.img} className="object-cover" alt="" />
          </div>

          {/* <div className="w-20  hover:cursor-pointer">
            <div className="border group border-red-600 bg-transparent hover:bg-red-600 px-3 py-1">
              <IoMdPlay className="text-red-600 group-hover:text-white group-hover:bg-red-600 text-4xl mx-auto" />
            </div>
          </div> */}
          {/* Play Button with Link - Opens in Same Tab */}
          {/* <Link to={detail.link} className="w-20 hover:cursor-pointer">
            <div className="border group border-red-600 bg-transparent hover:bg-red-600 px-3 py-1">
              <IoMdPlay className="text-red-600 group-hover:text-white text-4xl mx-auto" />
            </div>
          </Link> */}
          {/* Play Button - Open in New Tab */}
          <a
            href={detail.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 hover:cursor-pointer"
          >
            <div className="border group border-red-600 bg-transparent hover:bg-red-600 px-3 py-1">
              <IoMdPlay className="text-red-600 group-hover:text-white text-4xl mx-auto" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PlayAndDownload;
