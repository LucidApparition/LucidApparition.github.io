import React from 'react'
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import ServiceCard from './cards/ServiceCard';

function About() {
  return (
    <>
      {/* Introduction Section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:${styles.sectionSubTextDark} text-center`}>Introduction</p>
        <h1 className={`${styles.sectionHeadText} dark:${styles.sectionHeadTextDark} text-center`}>About Me</h1>
        </motion.div>

      {/* Body Section */}
      <motion.div
        variants={fadeIn('right', 'spring', 1, 2)}
        className="mt-20 mb-4 rounded-2xl p-6"
        style={{
          border: '4px solid rgba(255, 157, 0, 1)', // Red border for emphasis
          boxShadow: '0 0 20px rgba(255, 157, 0, 1)', // Glow effect
        }}
      >
        <motion.p
          variants={fadeIn('', '', 1.5, .5)}
          className="text-secondary dark:text-dark-primary text-[17px] mt-4 ml-4 mr-4 max-w-4xl leading-[30px]"
        >  
          I&apos;m a software developer with a diverse background in software 
          engineering, industrial operations, and project management. 
          With a Bachelor&apos;s degree in Computer Science 
          from Rhode Island College and years of hands-on experience, 
          I&apos;ve built a strong foundation in web development, 
          database management, and automation technologies.
        </motion.p>
        <motion.div 
          variants={textVariant()}
        >
          <p className={`${styles.sectionSubText} dark:${styles.sectionSubTextDark} mt-12 text-center`}>My Career Highlights</p>
        </motion.div>
        <div className="mt-12 ml-4 flex flex-wrap gap-4 ">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} service={service} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default SectionWrapper(About, 'about');
