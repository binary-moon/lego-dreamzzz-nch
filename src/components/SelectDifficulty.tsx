import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "./Button";

import { useStore } from "../useStore";

import {
  containerVariants,
  bottomToTopVariants,
  buttonVariants,
} from "../utilities/animations";

import logo from "../assets/images/lego-lockup.png";
import title from "../assets/images/Settings_1_Text_Cloud.svg";
import backgroundPattern from "../assets/images/Background_Pattern.png";

export const SelectDifficulty: React.FC = () => {
  const setGameDifficulty = useStore((state) => state.setGameDifficulty);
  const gameDifficulty = useStore((state) => state.gameDifficulty);
  const setGameState = useStore((state) => state.setGameState);
  return (
    <div className="flex flex-col w-full h-full absolute top-0 left-0">
      <AnimatePresence>
        <motion.div
          className="flex flex-col w-full h-full items-center justify-between pt-[3dvh] pb-8  px-[30px] bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundPattern})` }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={logo}
            alt="Lego - Dreamzzz"
            className="w-[40dvw] h-auto object-contain"
          />
          <motion.img
            src={title}
            alt="Choose your difficulty level"
            className="w-[60%] h-auto object-contain"
            variants={bottomToTopVariants}
          />
          <motion.div
            className="flex flex-col gap-[10px]"
            initial="hidden"
            animate="visible"
            variants={containerVariants} // Ensure parent has staggerChildren
          >
            <motion.div variants={buttonVariants}>
              <Button
                className="w-[66dvw]"
                text="Easy"
                onClick={() => setGameDifficulty("easy")}
                active={gameDifficulty === "easy"}
                buttonType="secondary"
              />
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                className="w-[66dvw]"
                text="Normal"
                onClick={() => setGameDifficulty("normal")}
                buttonType="secondary"
                active={gameDifficulty === "normal"}
              />
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button
                className="w-[66dvw]"
                text="Hard"
                onClick={() => setGameDifficulty("hard")}
                buttonType="secondary"
                active={gameDifficulty === "hard"}
              />
            </motion.div>
          </motion.div>
          <motion.span
            className="text-[18px]/[23px] font-normal text-lightgrey"
            variants={bottomToTopVariants}
          >
            Choose NORMAL for default game settings. EASY for natural dreamers
            aged under 8 and HARD for ages 10 and above.
          </motion.span>
          <motion.div variants={bottomToTopVariants}>
            <Button
              className="w-[66dvw]"
              text="Next"
              onClick={() => setGameState(3)}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
