import React from "react";
import Hero from "../components/HomeComp/Hero";
import About from "../components/HomeComp/About";
import FeaturedInterview from "../components/HomeComp/FeaturedInterview";
import YouTubePlaylists from "../components/HomeComp/YouTubePlaylists";
import Gallery from "../components/HomeComp/Gallery";
import PlayAndDownload from "../components/HomeComp/PlayAndDownload";
import UpcomingPastEvents from "../components/HomeComp/UpcomingPastEvents";
import Contact from "../components/HomeComp/Contact";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedInterview />
      <YouTubePlaylists />
      <Gallery />
      <PlayAndDownload />
      <UpcomingPastEvents />
      <Contact />
    </div>
  );
};

export default Homepage;
