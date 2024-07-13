import { motion } from "framer-motion";

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

import { Button } from "./Button";
import { GlowingText } from "./GlowingText";

export const Intro = () => {
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
    rotate: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div>
      <img
        src={logo}
        alt="Lego - Dreamzzz"
        className="absolute top-[3vh] left-8 w-[60%] h-auto object-contain"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-screen h-[75vh] bg-cover"
        style={{ backgroundImage: `url(${background})` }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img
          src={rocks}
          className="absolute bottom-0 -translate-y-[6vh] -translate-x-[0vw] w-[40vh] h-auto right-0 object-contain"
          alt="rocks"
        />
        <img
          src={introFrame}
          className="absolute -top-[2px] left-0 w-full h-auto object-contain"
          alt="intro frame"
        />
        <motion.img
          src={darkCharacters}
          className="absolute top-[30vh] w-[25vh] h-auto -right-[19vw] object-contain"
          alt="Dark Characters"
          animate={subtleFloatingAnimation}
        />
        <img
          src={skullIsland}
          className="absolute top-[30vh] -left-[9vw] w-[10vh] h-auto object-contain"
          alt="Skull Island"
        />
        <motion.img
          src={islandWithDoor}
          className="absolute top-[40vh] -left-[0] w-[15vh] h-auto object-contain"
          alt="Island With Door"
          animate={subtleWobblingAnimation}
        />
        <motion.img
          src={legoCharacter}
          className="absolute top-[45vh] left-[7vw] w-[8vh] h-auto object-contain"
          alt="Lego Character"
          animate={subtleWobblingAnimation}
        />
        <img
          src={darkRockIsland}
          className="absolute bottom-0 right-0 w-[100vw] h-auto translate-y-[24vh] translate-x-[12vw] object-contain"
          alt="Dark Rock Island"
        />
        <motion.img
          src={theNeverWitch}
          className="absolute top-0 -right-[8vw] w-[100vh] h-auto object-contain"
          alt="The Never Witch"
          animate={floatingAnimation}
        />
      </motion.div>
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
      <Button
        text="Start!"
        className="absolute bottom-12 w-[66vw] -translate-x-[50%]"
        onClick={() => console.log("Start Game")}
      />
    </div>
  );
};
