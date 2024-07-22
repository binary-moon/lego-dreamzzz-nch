import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  containerVariants,
  bottomToTopVariants,
  bottomToTopVariantsPlaySize,
} from "../utilities/animations";

import { useStore, PlayAreaSize } from "../useStore";

import logo from "../assets/images/lego-lockup.png";
import title from "../assets/images/Settings_2_Text_Cloud.png";
import backgroundPattern from "../assets/images/Background_Pattern.png";
import playAreaSmall from "../assets/images/Play_Area_Small.png";
import playAreaMedium from "../assets/images/Play_Area_Medium.png";
import playAreaLarge from "../assets/images/Play_Area_Large.png";

import { PlayAreaSelector } from "./PlayAreaSelector";
import { Button } from "./Button";

const playAreaVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const SelectPlayArea: React.FC = () => {
  const playAreaSize = useStore((state) => state.playAreaSize);
  const playAreaSizeOptions: PlayAreaSize[] = ["small", "medium", "large"];
  return (
    <div className="flex flex-col w-full h-full absolute top-0 left-0">
      <AnimatePresence>
        <motion.div
          className="flex flex-col w-full h-full items-center pt-[3dvh] pb-8  px-[30px] bg-cover bg-center"
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
          <motion.div
            className="w-full flex flex-col items-center absolute top-[50%] -translate-y-[50%]"
            variants={bottomToTopVariantsPlaySize}
          >
            <motion.img
              src={title}
              alt="Choose your difficulty level"
              className="w-[60%] h-auto object-contain z-40 -top-[0]"
            />
            <div className="-mt-24">
              <AnimatePresence mode="wait">
                {playAreaSize === "small" && (
                  <motion.img
                    key="small"
                    src={playAreaSmall}
                    alt="Small play area"
                    variants={playAreaVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  />
                )}
                {playAreaSize === "medium" && (
                  <motion.img
                    key="medium"
                    src={playAreaMedium}
                    alt="Medium play area"
                    variants={playAreaVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  />
                )}
                {playAreaSize === "large" && (
                  <motion.img
                    key="large"
                    src={playAreaLarge}
                    alt="Large play area"
                    variants={playAreaVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  />
                )}
              </AnimatePresence>
            </div>
            <PlayAreaSelector playAreaSizeOptions={playAreaSizeOptions} />
            <AnimatePresence mode="wait">
              {playAreaSize === "small" && (
                <motion.span
                  key="smallText"
                  className="text-[20px] black text-white italic mt-5"
                  variants={playAreaVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  ROOM SIZE AND SMALLER SPACES (5m RADIUS)
                </motion.span>
              )}
              {playAreaSize === "medium" && (
                <motion.span
                  key="mediumText"
                  className="text-[20px] black text-white italic mt-5"
                  variants={playAreaVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  PERFECT FOR A GAME AT HOME (15m RADIUS)
                </motion.span>
              )}
              {playAreaSize === "large" && (
                <motion.span
                  key="largeText"
                  className="text-[20px] black text-white italic mt-5"
                  variants={playAreaVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  LARGE SPACES AND OUTSIDE (30m RADIUS)
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            className="absolute bottom-8"
            variants={bottomToTopVariants}
          >
            <Button
              className="w-[66dvw]"
              text="Ok"
              onClick={() => console.log("Ok")}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
