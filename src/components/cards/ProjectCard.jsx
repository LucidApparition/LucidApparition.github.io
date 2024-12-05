// ProjectCard.jsx
import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { github } from '../../assets'; // Assuming github is an image asset in your assets folder
import { fadeIn } from '../../utils/motion'; // Import fadeIn animation

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) {
  return (
    <motion.div 
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        style={{ 
          border: '4px solid rgba(0, 100, 224, 1)',
          boxShadow: '0 0 20px rgba(0, 100, 224, 1)',
        }}
        className="bg-dark-secondary pb-2 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(sourceCodeLink, '_blank')}
              className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-flex h-flex object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ml-5">
          <h3 className="text-dark-tertiary font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-dark-primary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 ml-5 flex flex-wrap gap-4">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  image: PropTypes.string.isRequired,
  sourceCodeLink: PropTypes.string.isRequired,
};

export default ProjectCard;
