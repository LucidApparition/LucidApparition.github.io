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
      <div className="w-full mt-10">
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10"
        >
            {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`} 
              index={index} 
              {...project} 
            />
            ))}
        </motion.div>
      </div>
    </>
  );
}

export default SectionWrapper(Works, '');
