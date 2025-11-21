import React from "react";
import Hero from "../components/ContactComp/Hero";
import Form from "../components/ContactComp/Form";
import Contact from "../components/HomeComp/Contact";
import Map from "../components/EventComp/Map";

const Contactpage = () => {
  return (
    <div>
      <Hero />
      <Map/>
      <Form/>
      <Contact/>
    </div>
  );
};

export default Contactpage;
