import Slider from "react-slick";
import img0 from "../../assets/0.webp";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/4.webp";
import img5 from "../../assets/5.webp";
import img6 from "../../assets/6.webp";
import img7 from "../../assets/7.webp";
import img8 from "../../assets/8.webp";
import img9 from "../../assets/9.webp";
import img10 from "../../assets/10.webp";
import img11 from "../../assets/11.webp";
import img12 from "../../assets/12.webp";
import img13 from "../../assets/13.webp";
import img14 from "../../assets/14.webp";
import img15 from "../../assets/15.webp";
import img16 from "../../assets/16.webp";
import img17 from "../../assets/17.webp";
import img18 from "../../assets/18.webp";
import img19 from "../../assets/19.webp";
import img20 from "../../assets/20.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const PauseOnHover = () => {
  const baseSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // FASTER
    speed: 2000, // Smooth quick transition
    cssEase: "linear", // smooth continuous scroll
    rtl: false, // to make it move right to left
    pauseOnHover: true,
    // waitForAnimate: false,
    arrows: false, // REMOVE NEXT & PREVIOUS BUTTONS

    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const images = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  return (
    <div className="bg-green700 relative px-6 md:px-10 lg:px-16 xl:px-28">
      <p className="text-center text-2xl font-bold mb-8">
        Captured moments from events and performances
      </p>
      {/* TOP SLIDER → Left to Right */}
      <div className="slider-container mx-auto overflow-hidden">
        <Slider {...{ ...baseSettings, rtl: false }}>
          {images.map((src, index) => (
            <div key={index} className="px-6">
              <img
                src={src}
                alt={`gallery-${index}`}
                className="rounded-xl w-full h-48 object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* BOTTOM SLIDER → Right to Left */}
      <div className="slider-container mx-auto overflow-hidden mt-6 md:mt-14">
        <Slider {...{ ...baseSettings, rtl: true }}>
          {images.map((src, index) => (
            <div key={index} className="px-6">
              <img
                src={src}
                alt={`gallery-${index}`}
                className="rounded-xl w-full h-48 object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <Link
        to=""
        className="mt-4 block px-10 py-2 bg-red-500 text-white 
hover:bg-white hover:text-red-500 border border-red-500 w-fit text-center mb-10 transition-all duration-300"
      >
        View All
      </Link>
    </div>
  );
};

export default PauseOnHover;
