export const textVariant = (delay) => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => {
  let x; let y;

  if (direction === 'left') {
    x = 100;
    y = 0;
  } else if (direction === 'right') {
    x = -100;
    y = 0;
  } else if (direction === 'up') {
    x = 0;
    y = 100;
  } else if (direction === 'down') {
    x = 0;
    y = -100;
  } else {
    x = 0;
    y = 0;
  }

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transformation: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const slideIn = (direction, type, delay, duration) => {
  let x; let y;

  if (direction === 'left') {
    x = 100;
    y = 0;
  } else if (direction === 'right') {
    x = -100;
    y = 0;
  } else if (direction === 'up') {
    x = 0;
    y = 100;
  } else if (direction === 'down') {
    x = 0;
    y = -100;
  } else {
    x = 0;
    y = 0;
  }

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transformation: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren: delayChildren || 0,
    },
  },
});
