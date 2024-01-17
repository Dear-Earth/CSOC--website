import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { styles } from "../styles";
import { motion } from "framer-motion";
import logo from "../Images/csoc-logo.png";

const HeroSection = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="background h-screen text-white" id="home">
      <div className="flex flex-col py-28 justify-center items-center">
        {/* <div>
        <img src={logo} alt="logo" className="h-36 md:h-48"/>
        </div> */}
        <div className="text-9xl py-10 font-bold">
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Society Of<br></br>
            <span className="text-[#915EFF] ml-5">Civil Engineering</span>
          </h1>
        </div>
        <div className="text-center py-5 text-4xl font-[Play] font-bold">
          <h1>WE ARE &nbsp;<span className="text-[#915EFF]">
          <Typewriter
            words={[" A TEAM", "WE ARE A FAMILY"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
          /></span></h1>
        </div>

        <div className="absolute xs:bottom-10 bottom-2 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
