import React from 'react'
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';
import { fadeIn } from '../../utils/motion';

function ServiceCard({ index, service }) {
  const { title, icon } = service;

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)} // Motion animation
      className="w-full max-w-[200px]" // Ensure motion container aligns with the card
    >
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card w-[150px] h-[150px]"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-4 flex justify-evenly items-center flex-col w-[150px] h-[150px]"
          style={{ transform: 'rotate(-8deg)' }}
        >
          <img src={icon} alt={`${title} icon`} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[12px] font-sans text-wrap">
            {title}
          </h3>
        </div>
      </Tilt>
    </motion.div>
  );
}

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;

