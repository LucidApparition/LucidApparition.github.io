import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import ContactCard from './cards/ContactCard';
import { resume } from '../assets';

function Contact() {
  const resumeLink = resume;
  const linkedInLink = 'https://www.linkedin.com/in/jeffery-grafe/';

  return (
    <motion.div
            variants={fadeIn('up', 'spring', 1, 2)} // Use the index prop here
            className="flex justify-center items-center w-full mt-12 h-screen"
    >
      <div 
        className="w-screen mb-4 text-black dark:text-white rounded-2xl p-6"
        style={{
          border: '4px solid rgba(75, 0, 130, 1)',
          boxShadow: '0 0 20px rgba(75, 0, 130, 1)',
        }}
      >
        <ContactCard resumeLink={resumeLink} linkedInLink={linkedInLink} />
      </div>
    </motion.div>
  );
}

export default SectionWrapper(Contact, 'contact');
