import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import Nith from "../Images/nith.png";


const HeroSection = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="background h-screen text-white" id="home">
      <div className="flex flex-col-reverse py-28 justify-center items-center">
        <div className="hidden">
          <img src={Nith} className=" h-48 w-48"/>
        </div>
        <div className="text-center py-28 text-4xl font-[Play] font-bold">
          <Typewriter
            words={["Hello! we are Team CSOC.", "Society of Civil Engineering"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
