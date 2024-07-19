import { motion } from "framer-motion";

import onboardSpeechCloud3 from "../assets/images/Onboard_Speech_Cloud_3.svg";
import lightChracterIsland2 from "../assets/images/light_character_island_2.png";
import lightChracterIsland4 from "../assets/images/light_character_island_4.png";
import relem from "../assets/images/Relem.png";
import mateoPointingIsland from "../assets/images/Mateo_Pointing_Island.png";
import rocks from "../assets/images/rocks.png";

import {
  containerVariants,
  rightToLeftVariants,
  leftToRightVariants,
  getFloatingAnimation,
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
      <motion.img
        src={mateoPointingIsland}
        alt="Mateo Pointing Island"
        className="absolute top-[36dvh] left-[28dvw] w-[60%] h-auto object-contain"
        variants={leftToRightVariants}
        animate={getFloatingAnimation(4, 0, 20)}
      />
      <motion.img
        src={onboardSpeechCloud3}
        alt="Help us catch her and the nightmare creatures"
        className="absolute top-[8dvh] right-[3dvw] w-[60%] h-auto object-contain"
        variants={rightToLeftVariants}
      />
    </motion.div>
  );
};
