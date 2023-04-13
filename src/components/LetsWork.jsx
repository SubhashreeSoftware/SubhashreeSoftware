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

const ServiceCard = ({ index, title, icon, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <Tilt className="xs:w-[250px] w-full">
      <>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          onClick={() => setIsModalOpen(true)}
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            
          >
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
            <h3 className="text-white text-[15px] font-bold text-center">
              Starting From {price} INR
            </h3>
            <a className="button-89">Let's Do This</a>
          </div>
        </motion.div>
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

          <h2 style={{ textTransform: 'uppercase' }} className="mt-1">{title}</h2>
          <p className="mt-5">Let me Code Your Dream...</p>
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
            href={`https://api.whatsapp.com/send?phone=918144926692&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Chatting on WhatsApp
          </a>
        </Modal>
      </>
    </Tilt>
  );
};

const About = ({ index, title, icon }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Start A Project</p>
        <h2 className={styles.sectionHeadText}>Interested In Working Together ?</h2>
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
