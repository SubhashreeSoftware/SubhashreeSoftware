import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { meblue1 } from "../assets";
import { m1 } from "../assets";
import { m3} from "../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div className='px-5 '>
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='relative p-10 rounded-3xl w-full h-full'
      style={{ backdropFilter: "blur(8px) saturate(150%)" }}
    >
      <div className="absolute inset-0 bg-black-200 opacity-50 rounded-3xl"></div>
      <p className='text-white font-black text-[48px]'>"</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  </div>
);



const Feedbacks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[320px] flex flex-col justify-center self-end`}
        style={{ backgroundImage: `url(${m3})`,
        backgroundRepeat: "no-repeat" ,
        
      }}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-right`}>Testimonials.</p>
          <h2 className={`${styles.sectionHeadText} text-right`}>Mmmm, a little brag 😊</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
