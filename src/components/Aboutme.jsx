import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { meblue1 } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Typed from "react-typed";

const Aboutme = () => {
    return (
        <>
    <section className={`relative w-full h-screen mx-auto`}>
    <div
        className={` inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} `}
      >
        <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Subhashree Sahoo</h2>
        <p className={styles.sectionSubText}><Typed 
                className="typed-text"
                strings={["Web Designer","Web Development","Application Development"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                /></p>
      </motion.div>
      </div>
      {/* <div className='absolute xs:bottom-10  w-full flex justify-center items-center'> */}
            <div 
            className='card2'>
                <div className='circle'></div>
                <div className='content'>
                    <a className="button-89" >Start Project</a>
                </div>
                <img
                    className="meblue"
                    src={meblue1}
                    style={{ width: '30%' }}
                />
            </div>
            {/* </div> */}
            {/* <h1 className='textglow'>Subhashree Sahoo</h1> */}
        </section>
        </>
    );
};

export default SectionWrapper(Aboutme);
