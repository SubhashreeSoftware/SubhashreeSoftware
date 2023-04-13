import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { BoxCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Language I Speak : </h2>
      </motion.div>
    <div className='mt-10 flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          {/* <BoxCanvas icon={technology.icon} /> */}
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
