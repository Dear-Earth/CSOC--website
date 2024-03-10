import React from "react";
import {Aboutus} from "../components/Aboutus.js"
import Contact from "../components/contact.js"
import Member from "../Pages/Members.js"
import Events from "../Pages/Events.js"
import Gallery from "../Pages/Gallery.js"
import HeroSection from "../components/HeroSection.js";
import StarCanvas from '../components/canvas/stars.js'
import Feedback from "../components/feedback.js";
const Home = () => {
  return (
    <div className="bg-primary">
      <HeroSection />
      <StarCanvas />
      <Aboutus />
      <Feedback />
      <Member />
      <Events />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
