import React, { useState } from "react";
import TeamCard from "../components/TeamCard.js";
import finalyear from "../assets/FinalYeardata.js";
import firstYear from "../assets/Firstyeardata.js";
import secondYear from "../assets/Secondyeardata.js";
import thirdYear from "../assets/ThirdYeardata.js";

const Members = () => {
  const [data,setData] = useState(finalyear);
  return (
    <div className=" text-center bg-primary" id="members">
      <h1 className="pt-14 pb-10 text-4xl font-[Play] font-bold text-white">
        {" "}
        Meet Our Team{" "}
      </h1>
      <ul className="flex md:flex-row flex-wrap gap-10 justify-center items-center">
        <li>
          <button className="px-4 py-2 text-xl border-solid border-2 text-white border-white rounded-md font-bold hover:bg-white hover:text-black" onClick={() => setData(finalyear)}>
            Final Year
          </button>
        </li>
        <li>
          <button className="px-4 py-2 text-xl border-solid border-2 text-white border-white rounded-md font-bold hover:bg-white hover:text-black" onClick={() => setData(thirdYear)}>
            Third Year
          </button>
        </li>
        <li>
          <button className="px-4 py-2 text-xl border-solid border-2 text-white border-white rounded-md font-bold hover:bg-white hover:text-black" onClick={() => setData(secondYear)}>
            Second Year
          </button>
        </li>
        <li>
          <button className="px-4 py-2 text-xl border-solid border-2 text-white border-white rounded-md font-bold hover:bg-white hover:text-black" onClick={() => setData(firstYear)}>
            First Year
          </button>
        </li>
      </ul>
      <div>
        <div className="hidden md:block">
        <TeamCard cardno={3} info={data}/>
        </div>
        <div className="md:hidden">
          <TeamCard cardno={1} info={data}/>
        </div>
      </div>
    </div>
  );
};

export default Members;
