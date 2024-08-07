import { motion } from "framer-motion";

import onboardSpeechCloud3 from "../assets/images/Onboard_Speech_Cloud_3.svg";
import lightChracterIsland2 from "../assets/images/light_character_island_2.png";
import lightChracterIsland4 from "../assets/images/light_character_island_4.png";
import relem from "../assets/images/Relem.png";
import mateoPointingIsland from "../assets/images/Mateo_Pointing_Island.png";
import rocks from "../assets/images/rocks.png";
import blinking from "../assets/images/blinking.gif";

import {
  containerVariants,
  rightToLeftVariants,
  leftToRightVariants,
  getFloatingAnimation,
  getFadeInVariants,
} from "../utilities/animations";

export const OnboardingStep3: React.FC = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.img
        src={relem}
        alt="Relem"
        className="absolute top-[18dvh] left-[23dvw] w-[14%] h-auto object-contain opacity-50"
        variants={leftToRightVariants}
        animate={getFloatingAnimation(5, 2, 10)}
      />
      <motion.img
        src={rocks}
        alt="rocks"
        className="absolute bottom-[5dvh] -right-[30dvw] w-[60%] h-auto object-contain"
        variants={rightToLeftVariants}
        animate={getFloatingAnimation(5, 2, 10)}
      />
      <motion.img
        src={lightChracterIsland2}
        alt="Light Character Island 2"
        className="absolute top-[25dvh] left-[5dvw] w-[20%] h-auto object-contain opacity-40"
        variants={leftToRightVariants}
        animate={getFloatingAnimation(5, 0, 10)}
      />
      <motion.img
        src={lightChracterIsland4}
        alt="Light Character Island 4"
        className="absolute top-[30dvh] left-[6dvw] w-[35%] h-auto object-contain"
        variants={leftToRightVariants}
        animate={getFloatingAnimation(5, 1, 10)}
      />
      <motion.div
        className="absolute top-[36dvh] left-[28dvw] w-[60%]"
        variants={leftToRightVariants}
        animate={getFloatingAnimation(4, 0, 20)}
      >
        <img
          src={mateoPointingIsland}
          alt="Mateo Pointing Island"
          className="w-full h-auto object-contain"
        />
        <img
          src={blinking}
          alt="blinking"
          className="absolute top-0 left-0 w-[29%] h-auto object-contain"
        />
      </motion.div>
      <motion.img
        src={onboardSpeechCloud3}
        alt="Help us catch her and the nightmare creatures"
        className="absolute top-[8dvh] right-[3dvw] w-[60%] h-auto object-contain"
        variants={getFadeInVariants(0.75)}
      />
    </motion.div>
  );
};
