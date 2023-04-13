import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { meblue1 } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Typed from "react-typed";

const ServiceCard = ({ index, title, icon, price }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
    

      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <h3 className='text-white text-[15px] font-bold text-center'>
          Starting From {price} INR
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ index, title, icon }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Start A Project</p>
        <h2 className={styles.sectionHeadText}>Interested In Working Together ?</h2>
        {/* <Typed 
                className="typed-text"
                strings={["Web Designer","Web Development","Application Development"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
      <h1 className='textglow'>Subhashree Sahoo</h1> */}
 
      </motion.div>

    
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        We Should queue up a time chat.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
