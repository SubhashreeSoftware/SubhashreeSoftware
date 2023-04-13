import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { meblue1 } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Typed from "react-typed";
import Modal from 'react-modal';
import PhoneNumberInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';

Modal.setAppElement('#root');

const Aboutme = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phone, setPhone] = useState("");
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
       <div 
            className='card2'>
                <div className='circle'></div>
                <div className='content'>
                    <a className="button-89"  onClick={() => setIsModalOpen(true)} >Start Project</a>
                </div>
                <img
                    className="meblue"
                    src={meblue1}
                    style={{ width: '30%' }}
                />
            </div>
            <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Modal"
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          overlayClassName="fixed inset-0 bg-modal-bg flex justify-center items-center"
          style={{
            overlay: {
              backgroundColor: "transparent",
            },
            content: {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(8px) saturate(150%)",
              border: "none",
              borderRadius: "20px",
              outline: "none",
              padding: "20px",
            },
          }} 
          >
          <button className="self-end" onClick={() => setIsModalOpen(false)}>X</button>

          <h1 className="mt-5" style={{ textTransform: 'uppercase' }}>Let me Code Your Dreams...</h1>
          <p>I’m always open to discussing product design</p>
          <p> work or partnership opportunities.</p>
          <div className="mt-4">
            <label className="block mb-2 text-secondary font-bold">
              Enter your WhatsApp number :
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-primary rounded-[20px] py-2 px-5 flex justify-evenly items-center flex-col"
            />
          </div>
          <a
            className="button-89 mt-4"
            href={`https://api.whatsapp.com/send?phone=918144926692}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Chatting on WhatsApp
          </a>
        </Modal>
        </section>
        </>
    );
};

export default SectionWrapper(Aboutme);
