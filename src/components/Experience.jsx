// Experience.jsx
import React from 'react'
import { motion } from 'framer-motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import ExperienceCard from './cards/ExperienceCard'; // Import the ExperienceCard component

function Experience() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:${styles.sectionSubTextDark} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} dark:${styles.sectionHeadTextDark} text-center`}>
          Work Experience
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experience, 'work');
