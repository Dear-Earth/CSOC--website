import React from "react";
import {Aboutus} from "../components/Aboutus.js"
import FacultyMem from "../components/FacultyMem.js"
import Contact from "../components/contact.js"
import Member from "../Pages/Members.js"
import Events from "../Pages/Events.js"
import HeroSection from "../components/HeroSection.js";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Aboutus />
      <FacultyMem />
      <Member />
      <Events />
      <Contact />
    </div>
  );
};

export default Home;
