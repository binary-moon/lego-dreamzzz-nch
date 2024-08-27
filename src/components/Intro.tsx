import { useEffect } from "react";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useStore } from "../useStore";

import logo from "../assets/images/lego-lockup.png";
import background from "../assets/images/sky-background.jpg";
import introFrame from "../assets/images/intro-clouds-top.png";
import darkRockIsland from "../assets/images/dark-rock-island.png";
import rocks from "../assets/images/rocks.png";
import darkCharacters from "../assets/images/dark-characters.png";
import skullIsland from "../assets/images/skull-island.png";
import islandWithDoor from "../assets/images/island-with-door.png";
import legoCharacter from "../assets/images/lego-character.png";
import theNeverWitch from "../assets/images/the-never-witch.png";
import spiral from "../assets/images/spiral.png";

import { Button } from "./Button";
import { GlowingText } from "./GlowingText";

export const Intro = () => {
  const witchControls = useAnimationControls();
  const setAppState = useStore((state) => state.setAppState);

  const floatingAnimation = {
    y: [0, -20, 0],
    scale: [1.2, 1.2, 1.2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const subtleFloatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const subtleWobblingAnimation = {
    rotate: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const glimmerAnimation = {
    scale: [1.5, 1.75, 1.5, 1.5, 1.5, 1.75, 1.5],
    opacity: [0.9, 0.55, 0, 0, 0, 0.55, 0.9],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const rightToLeftVariants = {
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

  const leftToRightVariants = {
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

  const rightBottomToTopVariants = {
    hidden: { x: "50%", y: "50%", opacity: 0 },
    visible: {
      x: "12dvh",
      y: "24dvh",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const witchEntryAnimation = {
    hidden: { x: "50%", y: "50%", opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1.2,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.75,
      },
    },
  };

  const spiralRotationAnimation = {
    rotate: 360,
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    },
  };

  useEffect(() => {
    const sequence = async () => {
      await witchControls.start("visible");
      witchControls.start("floating");
    };
    sequence();
  }, [witchControls]);

  return (
    <div>
      <AnimatePresence>
        <img
          src={logo}
          alt="Lego - Dreamzzz"
          className="absolute top-[3dvh] left-8 w-[60%] h-auto object-contain"
        />
        <div
          className="absolute bottom-0 left-0 w-screen h-[75dvh] bg-cover bg-right overflow-hidden"
          style={{ backgroundImage: `url(${background})` }}
        >
          <motion.img
            src={spiral}
            className="absolute top-[5vh] w-full h-auto right-0 object-contain mix-blend-multiply opacity-85"
            alt="spiral"
            animate={spiralRotationAnimation}
          />
          <img
            src={rocks}
            className="absolute bottom-0 -translate-y-[6dvh] -translate-x-[0dvw] w-[40dvh] h-auto right-0 object-contain "
            alt="rocks"
          />
          <img
            src={introFrame}
            className="absolute -top-[2px] left-0 w-full h-auto object-contain"
            alt="intro frame"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src={darkCharacters}
              className="absolute top-[30dvh] w-[25dvh] h-auto -right-[19dvw] object-contain"
              alt="Dark Characters"
              variants={rightToLeftVariants}
              animate={subtleFloatingAnimation}
            />
            <motion.img
              src={skullIsland}
              className="absolute top-[30dvh] -left-[9dvw] w-[10dvh] h-auto object-contain"
              alt="Skull Island"
              variants={leftToRightVariants}
              animate={subtleFloatingAnimation}
            />
            <motion.div
              variants={leftToRightVariants}
              animate={subtleWobblingAnimation}
            >
              <img
                src={islandWithDoor}
                className="absolute top-[40dvh] -left-[0] w-[15dvh] h-auto object-contain"
                alt="Island With Door"
              />
              <img
                src={legoCharacter}
                className="absolute top-[45dvh] left-[7dvw] w-[8dvh] h-auto object-contain"
                alt="Lego Character"
              />
            </motion.div>
            <motion.img
              src={darkRockIsland}
              className="absolute bottom-0 right-0 w-[100dvw] h-auto translate-y-[24dvh] translate-x-[12dvw] object-contain"
              alt="Dark Rock Island"
              variants={rightBottomToTopVariants}
            />
            <motion.div
              className="absolute top-0 right-[0dvw] w-[95dvw]"
              initial="hidden"
              animate={witchControls}
              variants={{
                hidden: witchEntryAnimation.hidden,
                visible: witchEntryAnimation.visible,
                floating: floatingAnimation,
              }}
            >
              <motion.img
                src={theNeverWitch}
                className="relative w-full h-auto object-contain"
                alt="The Never Witch"
              />
              <motion.div
                className="absolute top-[12.8dvw] left-[6.5dvw] w-[20dvw] h-[20dvw] rounded-full overflow-hidden"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,187,249,1) 0%, rgba(0,212,255,0) 40%)",
                }}
                animate={glimmerAnimation}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
        <span className="flex flex-col items-end absolute right-8 top-[92px] -rotate-[8deg]">
          <span>
            <GlowingText text="Nightmare" />
          </span>
          <span className="pr-8">
            <GlowingText text="Creature" />
          </span>
          <span className="pr-16">
            <GlowingText text="Hunt" />
          </span>
        </span>
        <motion.div
          className="absolute bottom-12 left-[50%]"
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          transition={{ duration: 0.3, easeInOut: "spring", delay: 1.5 }}
        >
          <Button
            className="w-[66dvw]"
            text="Start!"
            onClick={() => setAppState(1)}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
