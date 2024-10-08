import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/images/lego-lockup.png";
import cloudsTop from "../assets/images/clouds_top.png";
import cloudsBottom from "../assets/images/clouds_bottom.png";
import background from "../assets/images/sky-background.jpg";

import { OnboardingStep1 } from "./OnboardingStep1";
import { OnboardingStep2 } from "./OnboardingStep2";
import { OnboardingStep3 } from "./OnboardingStep3";
import { Button } from "./Button";
import { TCModal } from "./TCModal";

import { useStore } from "../useStore";
import { trackEvent } from "../utilities/tracking";

import {
  containerVariants,
  bottomToTopVariants,
} from "../utilities/animations";

interface Props {
  // Add any props here
}

export const Onboarding: React.FC<Props> = () => {
  const [onboardingPage, setOnboardingPage] = useState(0);
  const [isTCShown, setIsTCShown] = useState(false);
  const setGameState = useStore((state) => state.setGameState);

  const handleNext = () => {
    setGameState("on");
  };

  const backgroundPositions: { [key: number]: string } = {
    0: "0% 50%", // bg-left
    1: "100% 50%", // bg-right
    2: "0% 50%", // bg-left
  };

  useEffect(() => {
    trackEvent("IntroPage");
    const interval = setInterval(() => {
      setOnboardingPage((prevPage) => {
        if (prevPage === 2) {
          clearInterval(interval);
          return prevPage;
        } else {
          return prevPage + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTCPopup = () => {
    setIsTCShown(true);
    trackEvent("TCPopup");
  };

  return (
    <div className="flex flex-col w-full h-full absolute top-0 left-0">
      <AnimatePresence>
        <motion.div
          className="absolute top-[8dvh] left-0 w-screen h-[75dvh] bg-cover overflow-hidden"
          style={{ backgroundImage: `url(${background})` }}
          animate={{
            backgroundPosition: backgroundPositions[onboardingPage],
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={cloudsTop}
            alt="Clouds"
            className="absolute -top-[2px] left-0 w-full h-auto object-contain"
          />
          <AnimatePresence>
            {onboardingPage === 0 && (
              <motion.div
                key="onboardingStep1"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <OnboardingStep1 />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {onboardingPage === 1 && (
              <motion.div
                key="onboardingStep2"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <OnboardingStep2 />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {onboardingPage === 2 && (
              <motion.div
                key="onboardingStep3"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <OnboardingStep3 />
              </motion.div>
            )}
          </AnimatePresence>
          <img
            src={cloudsBottom}
            alt="Clouds"
            className="absolute -bottom-[2px] left-0 w-full h-auto object-contain"
          />
        </motion.div>
        <img
          src={logo}
          alt="Lego - Dreamzzz"
          className="absolute top-[3dvh] left-[50%] -translate-x-[50%] w-[40dvw] h-auto object-contain"
        />
        <motion.div
          className="absolute top-[79dvh] w-full flex flex-col items-center gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-row gap-2"
            variants={bottomToTopVariants}
          >
            <span
              className={`w-2 h-2 rounded-full bg-grey ${
                onboardingPage !== 0 ? "opacity-30" : ""
              }`}
            ></span>
            <span
              className={`w-2 h-2 rounded-full bg-grey ${
                onboardingPage !== 1 ? "opacity-30" : ""
              }`}
            ></span>
            <span
              className={`w-2 h-2 rounded-full bg-grey ${
                onboardingPage !== 2 ? "opacity-30" : ""
              }`}
            ></span>
          </motion.div>
          <motion.div variants={bottomToTopVariants}>
            <Button
              className="w-[66dvw]"
              text={onboardingPage !== 2 ? "Skip Intro" : "Continue"}
              onClick={handleNext}
            />
          </motion.div>
          <motion.div variants={bottomToTopVariants}>
            <button className="italic font-black" onClick={handleTCPopup}>
              Read T&Cs →
            </button>
          </motion.div>
        </motion.div>
        {isTCShown && (
          <motion.div
            className="w-full h-full absolute top-0 left-0 py-8 px-6 "
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, easeInOut: "spring" }}
          >
            <TCModal />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
