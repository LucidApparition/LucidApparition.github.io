import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import PropTypes from 'prop-types';

function TechCard({ technology, index }) {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)} // Use the index prop here
            className="w-28 h-28 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{
                background: 'linear-gradient(145deg, #1b1b1b, #8b8b8b)',
                border: '4px solid rgba(0, 255, 0, 1)',
                boxShadow: '0 0 20px rgba(0, 255, 0, 1)',
            }}
        >
            <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                scale={1.1}
                transitionSpeed={450}
                className="rounded-full w-full h-full flex items-center justify-center"
            >
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-16 h-16 object-contain rounded-full"
                />
            </Tilt>
        </motion.div>
    );
}

TechCard.propTypes = {
    technology: PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired, // Add prop type for index
};

export default TechCard;
