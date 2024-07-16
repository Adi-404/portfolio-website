import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { profile} from "../assets";

import "../index.css";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 0,
          scale: 1,
          speed: 0,
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
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex flex-row max-[980px]:flex-col">
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <ul className="flex flex-shrink-0 flex-col mt-0 mr-10 list-none  space-y-6 items-start ">
          <li> I am a Computer Science Engineer with a Specialization in AI and Robotics (Btech) at Vellore Institute of Technology, Chennai. Graduating in July 2025, I am eager to secure challenging roles in my field of interest.</li>
          <li> My studies have provided me with broad proficiency in the use of engineering methods, tools, software packages, and techniques. Alongside this, I have developed Machine Learning skills while completing academic projects and internships. As such, I am confident that I can make an instant impact in engineering roles.</li>
          <li>I also take great pride in my work and appreciate solving challenging user problems. I've got a solid background in graphic design and I jump at the possibility to create user interfaces. I have experience working in cross-functional teams and interacting at various levels with a variety of stakeholders.</li>
          <li>Apart from work, I'm a geek at heart and love everything about food, tech, and design. I live for the weekend cos that’s when I get to cook.</li>
        </ul>
        
      </motion.p>
      
      
      <div class="card flex flex-shrink-0 mt-5 mr-10">
        <img src={profile}/>
      </div>
      
      </div>

      <div className='mt-20 flex flex-wrap gap-10 ml-0'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
