import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import items from "../assets/Eventsdata";
import { Link, animateScroll as scroll } from "react-scroll";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.cardTitle}
        </p>
      </div>

      <div>
        <p>{experience.cardDetailedText}</p>
      </div>
      <div className="mt-4">
        <Link
          activeClass="active"
          to={"gallery"}
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          <a href="/gallery">
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-300">
              {" "}
              Gallery{" "}
            </button>
          </a>
        </Link>
      </div>
    </VerticalTimelineElement>
  );
};

const EventTimeline = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What do we do?</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Our Main Events</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {items.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default EventTimeline;
