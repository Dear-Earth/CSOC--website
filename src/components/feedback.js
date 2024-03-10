import React from "react";
import { motion } from "framer-motion";
import P3 from "../assets/aImages/Snapinsta.app_343970458_611804627530348_4520768244585770303_n_1080.jpg";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient"></span> {name}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-28 h-28 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-primary rounded-[20px]`}>
      <div className={`bg-primary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Faculty Message.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-row flex-wrap gap-7`}
      >
        <FeedbackCard
          name={"Dr. V.K. Bansal"}
          key={0}
          image={""}
          testimonial={
            "Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others."
          }
        />
        <FeedbackCard
          name={"Dr. Ray Singh Meena"}
          key={2}
          image={P3}
          testimonial={
            "Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others."
          }
        />
      </div>
    </div>
  );
};

export default Feedbacks;
