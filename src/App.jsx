import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./Navbar";
import Eventspage from "./pages/Eventspage";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Eventspage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </>
  );
}

export default App;
