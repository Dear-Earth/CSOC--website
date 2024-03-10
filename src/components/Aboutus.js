import React from "react";
import logo from "../Images/csoc-logo.png";

export const Aboutus = () => {
  return (
    <div
      className="flex flex-col justify-center items-center py-24  bg-primary text-white"
      id="aboutus"
    >
      <h1 className="text-6xl font-bold font-[Play]">About Us</h1>
      <p className="max-w-4xl text-center text-xl my-16 px-6 py-4 border-solid-white border-2 rounded-xl">
        C-SOC is the Society of Civil Engineering at NIT Hamirpur, known for its
        standout and hardworking members amongst the college fraternity.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <img src={logo} alt="logo" className="h-36 md:h-48" />
      </div>
    </div>
  );
};

// about us page
