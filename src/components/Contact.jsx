import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { RobotCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

function Contact() {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>Social Links.</h3>
        <div className="mt-12 flex flex-col gap-8 text-center">
          <a
            href="https://github.com/LucidApparition"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium mb-4 hover:underline text-lg"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jeffery-grafe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium mb-4 hover:underline text-lg"
          >
            LinkedIn
          </a>
          <a
            href="/resume/Jeffrey%20Grafe%20Clean%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium mb-4 hover:underline text-lg"
          >
            Resume
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 2)}
        className="xl:flex-1 xl:h-auto md:h-[800px] h-[350px]"
      >
        <RobotCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, 'contact');
