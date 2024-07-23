import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/images/lego-lockup.png";
import backgroundPattern from "../assets/images/Background_Pattern.png";
import endScreenTextCloud from "../assets/images/End_Screen_Text_Cloud.svg";
import endScreenImage from "../assets/images/End_Screen_Image.png";
import cloud0of5 from "../assets/images/0of5Cloud.png";
import cloud1of5 from "../assets/images/1of5Cloud.png";
import cloud2of5 from "../assets/images/2of5Cloud.png";
import cloud3of5 from "../assets/images/3of5Cloud.png";
import cloud4of5 from "../assets/images/4of5Cloud.png";
import cloud5of5 from "../assets/images/5of5Cloud.png";
import legoCharacter2 from "../assets/images/Lego_Character_2.png";
import mateoPointing from "../assets/images/Mateo_Pointing.png";
import mainCTAButton from "../assets/images/Main_CTA_Button.svg";
import primeVideoLogo from "../assets/images/Prime_Video_Logo.svg";

import {
  containerVariants,
  bottomToTopVariants,
  bottomToTopCenteredVariants,
  leftToRightVariants,
  rightToLeftVariants,
} from "../utilities/animations";

import { useStore } from "../useStore";

export const FinalScreen: React.FC = () => {
  const gameScore = useStore((state) => state.gameScore);
  const setGameState = useStore((state) => state.setGameState);
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

          <motion.img
            src={endScreenImage}
            alt="End Screen Background Image"
            className="absolute top-[16dvh] w-[100dvw] h-auto object-contain"
            variants={bottomToTopVariants}
          />
          <motion.button
            className="absolute top-[12dvh] w-[75dvw]"
            variants={bottomToTopVariants}
            onClick={() => setGameState(1)}
          >
            <img
              src={endScreenTextCloud}
              alt="Amazzzing! You achieved ABC status! Try again?"
            />
          </motion.button>
          <motion.button
            className="absolute top-[56dvh] w-[75dvw]"
            variants={bottomToTopVariants}
          >
            <img
              src={mainCTAButton}
              alt="Amazzzing! You achieved ABC status! Try again?"
            />
          </motion.button>

          {gameScore === 0 && (
            <motion.img
              src={cloud0of5}
              alt="0 of 5"
              className="absolute top-[29dvh] right-[5dvw] w-[17dvw] h-auto object-contain"
              variants={bottomToTopVariants}
            />
          )}
          {gameScore === 1 && (
            <motion.img
              src={cloud1of5}
              alt="1 of 5"
              className="absolute top-[29dvh] right-[5dvw] w-[17dvw] h-auto object-contain"
              variants={bottomToTopVariants}
            />
          )}
          {gameScore === 2 && (
            <motion.img
              src={cloud2of5}
              alt="2 of 5"
              className="absolute top-[29dvh] right-[5dvw] w-[17dvw] h-auto object-contain"
              variants={bottomToTopVariants}
            />
          )}
          {gameScore === 3 && (
            <motion.img
              src={cloud3of5}
              alt="3 of 5"
              className="absolute top-[29dvh] right-[5dvw] w-[17dvw] h-auto object-contain"
              variants={bottomToTopVariants}
            />
          )}
          {gameScore === 4 && (
            <motion.img
              src={cloud4of5}
              alt="4 of 5"
              className="absolute top-[29dvh] right-[5dvw] w-[17dvw] h-auto object-contain"
              variants={bottomToTopVariants}
            />
          )}
          {gameScore === 5 && (
            <motion.img
              src={cloud5of5}
              alt="5 of 5"
              className="absolute top-[29dvh] right-[5dvw] w-[17dvw] h-auto object-contain"
              variants={bottomToTopVariants}
            />
          )}
          <motion.img
            src={primeVideoLogo}
            alt="Prime Video"
            className="absolute top-[75dvh] left-[50%] -translate-x-[50%] w-[40dvw] h-auto object-contain"
            variants={bottomToTopCenteredVariants}
          />
          <span className="absolute font-400 text-[16px]/[21px] bottom-0 px-5 pb-[35px]">
            Prime membership required. Restrictions apply. Amazon, Prime Video,
            and all related marks are trademarks of Amazon.com, Inc. and its
            affiliates.
          </span>
          <motion.img
            src={mateoPointing}
            alt="Mateo"
            className="absolute top-[35dvh] left-[5dvw] w-[60dvw] h-auto object-contain"
            variants={leftToRightVariants}
          />
          <motion.img
            src={legoCharacter2}
            alt="Lego Character 2"
            className="absolute top-[33dvh] right-[0dvw] w-[40dvw] h-auto object-contain"
            variants={rightToLeftVariants}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
