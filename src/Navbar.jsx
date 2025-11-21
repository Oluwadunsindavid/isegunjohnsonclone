// import React, { useEffect, useState } from "react";
// import { HashLink } from "react-router-hash-link";
// import { Link, NavLink } from "react-router-dom";
// import logo from "./assets/logo.png";
// import { IoMdClose } from "react-icons/io";
// import { BiMenuAltRight } from "react-icons/bi";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);

//   // Auto-close menu when resizing to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) setVisible(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Reusable link styles (desktop + mobile)
//   const navLink =
//     "text-sm px-3 py-2 rounded-md font-medium text-white transition-all duration-300 hover:text-red-500";

//   return (
//     <div className="bg-transparent absolute top-0 left-0 w-full flex justify-between items-center gap-4 pt-8 pb-4 px-6 md:px-10 lg:px-16 xl:px-40 transition-all z-50">
//       {/* Logo */}
//       <Link to="/" className="font-bold md:w-full">
//         <div className="w-12 h-12">
//           <img src={logo} alt="Logo" />
//         </div>
//       </Link>

//       {/* Desktop Links */}
//       <ul className="md:flex justify-between w-full hidden">
//         <HashLink smooth to="/#home" className={navLink}>
//           Home
//         </HashLink>
//         <HashLink smooth to="/#about" className={navLink}>
//           About
//         </HashLink>
//         <HashLink smooth to="/#tracks" className={navLink}>
//           Tracks
//         </HashLink>
//         <NavLink to="/events" className={navLink}>
//           Events
//         </NavLink>
//         <NavLink to="/contact" className={navLink}>
//           Contact
//         </NavLink>
//       </ul>

//       {/* Desktop Social Icons */}
//       <div className="hidden md:flex justify-end text-white w-full space-x-4">
//         <Link className="w-10 h-10 border border-gray-700 hover:text-red-500 rounded-full flex items-center justify-center">
//           <FaFacebookF />
//         </Link>
//         <Link className="w-10 h-10 border border-gray-700 hover:text-red-500 rounded-full flex items-center justify-center">
//           <FaTwitter />
//         </Link>
//         <Link className="w-10 h-10 border border-gray-700 hover:text-red-500 rounded-full flex items-center justify-center">
//           <FaInstagram />
//         </Link>
//       </div>

//       {/* Mobile Hamburger */}
//       <div
//         onClick={() => setVisible((prev) => !prev)}
//         className="md:hidden w-5 cursor-pointer"
//       >
//         {visible ? (
//           <IoMdClose className="text-2xl text-white" />
//         ) : (
//           <BiMenuAltRight className="text-2xl text-white" />
//         )}
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`absolute bg-black/90 left-0 right-0 top-24 overflow-hidden transition-all duration-300 ease-in-out z-20 ${
//           visible ? "max-h-96" : "max-h-0"
//         }`}
//       >
//         <div className="flex flex-col m-4 space-y-2">
//           <HashLink
//             onClick={() => setVisible(false)}
//             smooth
//             to="/#home"
//             className={navLink}
//           >
//             Home
//           </HashLink>

//           <HashLink
//             onClick={() => setVisible(false)}
//             smooth
//             to="/#about"
//             className={navLink}
//           >
//             About
//           </HashLink>

//           <HashLink
//             onClick={() => setVisible(false)}
//             smooth
//             to="/#tracks"
//             className={navLink}
//           >
//             Tracks
//           </HashLink>

//           <NavLink
//             onClick={() => setVisible(false)}
//             to="/events"
//             className={navLink}
//           >
//             Events
//           </NavLink>

//           <NavLink
//             onClick={() => setVisible(false)}
//             to="/contact"
//             className={navLink}
//           >
//             Contact
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import { IoMdClose } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Auto-close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setVisible(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ⭐ Detect scroll to hide & show navbar smoothly
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // When scrolling DOWN → hide navbar
      if (currentScroll > lastScroll && currentScroll > 300) {
        setShowNav(true);
      }

      // When scrolling UP → show navbar
      if (currentScroll < lastScroll && currentScroll > 300) {
        setShowNav(true);
      }

      // When back at the top → remove sticky nav
      if (currentScroll <= 300) {
        setShowNav(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Reusable link styles
  const navLink =
    "text-sm px-3 py-2 rounded-md font-medium text-white transition-all duration-300 hover:text-red-500";

  return (
    <div
      className={`w-full flex justify-between items-center gap-4
      px-6 md:px-10 lg:px-16 xl:px-40 z-50 transition-all duration-500

      ${
        showNav
          ? "fixed top-0 bg-[rgb(0,29,56)] py-5 shadow-lg"
          : "absolute top-0 bg-transparent pt-8 pb-4"
      }
      `}
    >
      {/* Logo */}
      <Link to="/" className="font-bold md:w-full">
        <div className="w-12 h-12">
          <img src={logo} alt="Logo" />
        </div>
      </Link>

      {/* Desktop Links */}
      <ul className="md:flex justify-between w-full hidden">
        <HashLink smooth to="/#home" className={navLink}>
          Home
        </HashLink>
        <HashLink smooth to="/#about" className={navLink}>
          About
        </HashLink>
        <HashLink smooth to="/#tracks" className={navLink}>
          Tracks
        </HashLink>
        <NavLink to="/events" className={navLink}>
          Events
        </NavLink>
        <NavLink to="/contact" className={navLink}>
          Contact
        </NavLink>
      </ul>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex justify-end text-white w-full space-x-4">
        <Link className="w-10 h-10 border border-gray-700 hover:text-red-500 rounded-full flex items-center justify-center">
          <FaFacebookF />
        </Link>
        <Link className="w-10 h-10 border border-gray-700 hover:text-red-500 rounded-full flex items-center justify-center">
          <FaTwitter />
        </Link>
        <Link className="w-10 h-10 border border-gray-700 hover:text-red-500 rounded-full flex items-center justify-center">
          <FaInstagram />
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setVisible((prev) => !prev)}
        className="md:hidden w-5 cursor-pointer"
      >
        {visible ? (
          <IoMdClose className="text-2xl text-white" />
        ) : (
          <BiMenuAltRight className="text-2xl text-white" />
        )}
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute bg-black/90 left-0 right-0 top-24 overflow-hidden transition-all duration-300 ease-in-out z-20 ${
          visible ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col m-4 space-y-2">
          <HashLink
            onClick={() => setVisible(false)}
            smooth
            to="/#home"
            className={navLink}
          >
            Home
          </HashLink>
          <HashLink
            onClick={() => setVisible(false)}
            smooth
            to="/#about"
            className={navLink}
          >
            About
          </HashLink>
          <HashLink
            onClick={() => setVisible(false)}
            smooth
            to="/#tracks"
            className={navLink}
          >
            Tracks
          </HashLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/events"
            className={navLink}
          >
            Events
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className={navLink}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
