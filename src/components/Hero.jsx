import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { slideIn, zoomIn, fadeIn } from '../utils/motion'; // Import animation utilities
import { SectionWrapper } from '../hoc'; // Higher-order component for section styling and functionality

// Define an array of animation variants for random selection
const variantsArray = [
  fadeIn('down', 'spring', 1, 2), // Fade-in animation with downward direction
  fadeIn('up', 'spring', 1, 2), // Fade-in animation with upward direction
  slideIn('right', 'tween', 1, 0.5), // Slide-in animation with right direction
  slideIn('left', 'tween', 1, 0.5), // Slide-in animation with left direction
  zoomIn(1, 2), // Zoom-in animation
];

// Randomly select a variant from the array
const randomVariant = variantsArray[Math.floor(Math.random() * variantsArray.length)];

function Hero() {
  return (
    <motion.div variants={randomVariant}>
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <motion.div
            className="mb-4 rounded-2xl p-6"
            style={{
              border: '4px solid rgba(232, 90, 90, 1)', // Red border for emphasis
              boxShadow: '0 0 20px rgba(232, 90, 90, 1)', // Glow effect
            }}
            variants={randomVariant}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className={`${styles.heroHeadText}`}
              variants={slideIn('up', 'spring', 2, 2)} // Slide-in animation
            >
              Hi, I&apos;m
              <span className="text-[#01FF70]"> Jeff</span>
            </motion.h1>

            <motion.div
              className={`${styles.heroSubText} mt-2`}
              variants={fadeIn('down', 'tween', 3, 5)} // Fade-in
            >
              I&apos;m a passionate software developer specializing in crafting innovative solutions that blend technical expertise with creative problem-solving.
              I take pride in building intuitive user interfaces, scalable database systems, and robust industrial automation tools.
              <motion.p
                className={"sm:block hidden text-tertiary dark:text-dark-tertiary mt-6"}
                variants={fadeIn('up', 'tween', 10, 5)}
              >
                Explore my journey, skills, and projects, and feel free to reach out to collaborate on exciting opportunities!
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default SectionWrapper(Hero, 'hero');
