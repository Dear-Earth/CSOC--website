import React from "react";
import BlogCard from "../components/BlogCard.js";
import P1 from "../assets/aImages/Snapinsta.app_343579313_224101400310891_8759548070410944429_n_1080.jpg"
import P2 from "../assets/aImages/Snapinsta.app_343737427_256030710174483_7207454661832424043_n_1080.jpg"
import P3 from "../assets/aImages/Snapinsta.app_343970458_611804627530348_4520768244585770303_n_1080.jpg"


const FacultyMem = () => {
  return (
    <div className="flex flex-col justify-center items-center py-24">
      <h1 className="text-6xl font-bold text-center font-[Play]">Faculty Message</h1>
      <div className="flex justify-center items-center gap-10 flex-wrap my-16">
        <BlogCard im={P1} x={false} name={"Dr. S.S Katoch"}/>
        <BlogCard im={P2} x={true} name={"Dr. Umesh Kumar Pandey"}/> 
        <BlogCard im={P3} x={false} name={"Dr. Ray Singh Meena"}/>
      </div>
    </div>
  );
};

export default FacultyMem;
