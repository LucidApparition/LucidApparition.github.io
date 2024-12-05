// Works.jsx
import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import ProjectCard from './cards/ProjectCard';

function Works() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <div className="mt-20 flex flex-wrap gap-7">
            {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`} 
              index={index} 
              {...project} 
            />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default SectionWrapper(Works, '');
