import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/images/lego-lockup.png";
import backgroundPattern from "../assets/images/Background_Pattern.png";
import endScreenImage from "../assets/images/End_Screen_Image.png";
import legoCharacter2 from "../assets/images/Lego_Character_2.png";
import legoCharacter from "../assets/images/lego-character.png";
import mainCTAButton from "../assets/images/Main_CTA_Button.svg";
import primeVideoLogo from "../assets/images/Prime_Video_Logo.svg";
import ResultBadge1 from "../assets/images/Result_Badge_1st.png";
import ResultBadge2 from "../assets/images/Result_Badge_2nd.png";
import ResultBadge3 from "../assets/images/Result_Badge_3rd.png";
import ResultText1 from "../assets/images/Result_Text_1st.png";
import ResultText2 from "../assets/images/Result_Text_2nd.png";
import ResultText3 from "../assets/images/Result_Text_3rd.png";
import playAgainButton from "../assets/images/play_again_button.png";

import {
  containerVariants,
  bottomToTopVariants,
  bottomToTopCenteredVariants,
  leftToRightVariants,
  rightToLeftVariants,
  bottomToTopRotatedVariants,
} from "../utilities/animations";

import { useStore } from "../useStore";

export const FinalScreen: React.FC = () => {
  const gameRank = useStore((state) => state.gameRank);
  const setAppState = useStore((state) => state.setAppState);
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
            className="absolute top-[16dvh] w-[90dvw] h-auto object-contain"
            variants={bottomToTopVariants}
          />
          <motion.img
            src={
              gameRank === 1
                ? ResultBadge1
                : gameRank === 2
                ? ResultBadge2
                : ResultBadge3
            }
            alt="Result Badge"
            className="absolute top-[12dvh] w-[32dvw] h-auto object-contain"
            variants={bottomToTopVariants}
          />
          <motion.img
            src={
              gameRank === 1
                ? ResultText1
                : gameRank === 2
                ? ResultText2
                : ResultText3
            }
            alt="Result Text"
            className="absolute top-[25dvh] w-[95dvw] h-auto object-contain"
            variants={bottomToTopVariants}
          />
          <motion.span
            className="absolute top-[51dvh] text-[25px]/[22px] font-black italic -rotate-[9deg]"
            variants={bottomToTopRotatedVariants}
          >
            YOU ACHIEVED OUR
            <br />
            {gameRank === 1 ? "HIGHEST" : gameRank === 2 ? "2ND" : "3RD"} RANK!
          </motion.span>
          <motion.button
            className="absolute top-[57dvh] w-[30dvw]"
            variants={bottomToTopVariants}
          >
            <img
              src={playAgainButton}
              alt="Play Again"
              onClick={() => setAppState(2)}
            />
          </motion.button>
          <motion.img
            src={legoCharacter}
            alt="Mateo"
            className="absolute top-[47dvh] -left-[2dvw] w-[15dvh] h-auto object-contain"
            variants={leftToRightVariants}
          />
          <motion.img
            src={legoCharacter2}
            alt="Lego Character 2"
            className="absolute top-[46dvh] -right-[3dvw] w-[17dvh] h-auto object-contain"
            variants={rightToLeftVariants}
          />
          <motion.a
            className="absolute top-[70dvh] w-[70dvw]"
            variants={bottomToTopVariants}
            href="https://www.primevideo.com/dp/0G3TMG0K91CV2RBI29GCPXKN4L"
            target="_blank"
          >
            <img src={mainCTAButton} alt="Watch Lego Dreamzzz S2" />
          </motion.a>
          <motion.img
            src={primeVideoLogo}
            alt="Prime Video"
            className="absolute top-[81dvh] left-[50%] -translate-x-[50%] w-[37dvw] h-auto object-contain"
            variants={bottomToTopCenteredVariants}
          />
          <span className="absolute font-400 text-[3.4dvw]/[21px] top-[91dvh] px-5 pb-[35px]">
            Prime membership required. Restrictions apply. Amazon, Prime Video,
            and all related marks are trademarks of Amazon.com, Inc. and its
            affiliates.
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
