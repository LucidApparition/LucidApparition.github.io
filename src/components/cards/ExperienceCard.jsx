// ExperienceCard.jsx
import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion'; 
import Tilt from 'react-parallax-tilt';
import { fadeIn } from '../../utils/motion';
import PropTypes from 'prop-types';

function ExperienceCard({ experience }) {
  return (
    <motion.div 
      variants={fadeIn('left', 'spring', 1, 2)}
    >
      <Tilt 
      tiltMaxAngleX={10}
      tiltMaxAngleY={0}
      scale={1}
      transitionSpeed={450}
      className="mb-4 text-black dark:text-white rounded-2xl p-6"
      style={{ 
        border: '4px solid rgba(255, 215, 0, 1)',
        boxShadow: '0 0 20px rgba(255, 215, 0, 1)',
      }}
      >
        <VerticalTimelineElement
          contentStyle={{ background: 'transparent', color: '#fff', boxShadow: 'none' }}
          contentArrowStyle={{ display: 'none' }}
          date={experience.date}
          iconStyle={{ 
            background: experience.iconBg,
            width: '100px',
            height: '100px',
            borderRadius: '50%', 
            border: '2px solid #fff', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          icon={(
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          )}
        >
          <div className="flex flex-row items-center gap-x-4 mb-4">
          <h3 className="text-black dark:text-white text-[24px] font-bold">{experience.title}</h3>
            <p
              className="text-secondary dark:text-white text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-${index}`}
                className="text-black dark:text-white text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      </Tilt>
    </motion.div>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ExperienceCard;
