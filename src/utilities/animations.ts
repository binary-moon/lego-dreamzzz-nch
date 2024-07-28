export const getFloatingAnimation = (
  duration: number,
  delay: number,
  distance: number
) => ({
  y: [0, -distance, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

export const getWobblingAnimation = (
  duration: number,
  delay: number,
  angle: number
) => ({
  rotate: [-angle, angle, -angle],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const rightToLeftVariants = {
  hidden: { x: "50%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const leftToRightVariants = {
  hidden: { x: "-50%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const bottomRightToTopVariants = {
  hidden: { x: "50%", y: "50%", opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const bottomToTopVariants = {
  hidden: { y: "50%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const bottomToTopRotatedVariants = {
  hidden: { y: "50%", opacity: 0, rotate: "-9deg" },
  visible: {
    y: 0,
    rotate: "-9deg",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const bottomToTopCenteredVariants = {
  hidden: { y: "50%", x: "-50%", opacity: 0 },
  visible: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const bottomToTopVariantsPlaySize = {
  hidden: { y: "50%", opacity: 0 },
  visible: {
    y: "-55%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "easeIn",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const getFadeInVariants = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "easeIn",
      damping: 12,
      stiffness: 100,
      delay,
    },
  },
});
