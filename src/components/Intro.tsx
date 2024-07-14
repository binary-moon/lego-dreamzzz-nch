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
import spiral from "../assets/images/spiral.png";

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
        className="absolute top-[3dvh] left-8 w-[60%] h-auto object-contain"
      />
      <div
        className="absolute bottom-0 left-0 w-screen h-[75dvh] bg-cover bg-right"
        style={{ backgroundImage: `url(${background})` }}
      >
        <img
          src={rocks}
          className="absolute bottom-0 -translate-y-[6dvh] -translate-x-[0dvw] w-[40dvh] h-auto right-0 object-contain"
          alt="rocks"
        />
        <img
          src={introFrame}
          className="absolute -top-[2px] left-0 w-full h-auto object-contain"
          alt="intro frame"
        />
        <motion.img
          src={darkCharacters}
          className="absolute top-[30dvh] w-[25dvh] h-auto -right-[19dvw] object-contain"
          alt="Dark Characters"
          animate={subtleFloatingAnimation}
        />
        <img
          src={skullIsland}
          className="absolute top-[30dvh] -left-[9dvw] w-[10dvh] h-auto object-contain"
          alt="Skull Island"
        />
        <motion.img
          src={islandWithDoor}
          className="absolute top-[40dvh] -left-[0] w-[15dvh] h-auto object-contain"
          alt="Island With Door"
          animate={subtleWobblingAnimation}
        />
        <motion.img
          src={legoCharacter}
          className="absolute top-[45dvh] left-[7dvw] w-[8dvh] h-auto object-contain"
          alt="Lego Character"
          animate={subtleWobblingAnimation}
        />
        <img
          src={darkRockIsland}
          className="absolute bottom-0 right-0 w-[100dvw] h-auto translate-y-[24dvh] translate-x-[12dvw] object-contain"
          alt="Dark Rock Island"
        />
        <motion.img
          src={theNeverWitch}
          className="absolute top-0 -right-[8dvw] w-[100dvh] h-auto object-contain"
          alt="The Never Witch"
          animate={floatingAnimation}
        />
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
      <Button
        text="Start!"
        className="absolute bottom-12 w-[66dvw] -translate-x-[50%]"
        onClick={() => console.log("Start Game")}
      />
    </div>
  );
};
