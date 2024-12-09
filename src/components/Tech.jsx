import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { languages, frameworks, automation, cloud, vc } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import TechCard from './cards/TechCard';

function Tech() {
  const categories = [
    { title: "Programming Languages", data: languages },
    { title: "Frameworks", data: frameworks },
    { title: "Automation Tools", data: automation },
    { title: "Cloud Services", data: cloud },
    { title: "Version Control", data: vc },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Tools I've Used</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Tech</h2>
      </motion.div>
      <div className="mt-10 flex flex-col gap-10">
        {categories.map((category) => (
          <motion.div
            key={category.title}
            className="w-full"
            variants={textVariant()}
          >
            <h3 className={`${styles.sectionSubText} text-center mb-4`}>
              {category.title}
            </h3>
            <div className="flex flex-row flex-wrap justify-center gap-10">
              {category.data && category.data.length > 0 ? (
                category.data.map((technology, index) => (
                  <TechCard key={technology.name} technology={technology} index={index} />
                ))
              ) : (
                <p>No tools available</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Tech, 'tech');
