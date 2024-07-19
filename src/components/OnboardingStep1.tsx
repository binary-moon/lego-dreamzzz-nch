import { motion } from "framer-motion";

import skullIsland from "../assets/images/skull-island.png";
import lightChracterIsland1 from "../assets/images/light_character_island_1.png";
import lightChracterIsland2 from "../assets/images/light_character_island_2.png";
import islandWithDoor from "../assets/images/island-with-door.png";
import legoCharacter from "../assets/images/lego-character.png";
import onboardSpeechCloud1 from "../assets/images/Onboard_Speech_Cloud_1.svg";

import {
  containerVariants,
  rightToLeftVariants,
  leftToRightVariants,
  fadeInVariants,
  getFloatingAnimation,
} from "../utilities/animations";

export const OnboardingStep1: React.FC = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.img
        src={skullIsland}
        alt="Skull Island"
        className="absolute bottom-[0] right-[10dvw] w-[28%] h-auto object-contain"
        variants={rightToLeftVariants}
        animate={getFloatingAnimation(5, 0, 10)}
      />
      <motion.img
        src={lightChracterIsland2}
        alt="Light Character Island 2"
        className="absolute bottom-[29dvh] right-[22dvw] w-[20%] h-auto object-contain opacity-40"
        variants={rightToLeftVariants}
        animate={getFloatingAnimation(5, 1, 10)}
      />
      <motion.img
        src={lightChracterIsland1}
        alt="Light Character Island 1"
        className="absolute bottom-[20dvh] right-[1dvw] w-[30%] h-auto object-contain"
        variants={rightToLeftVariants}
        animate={getFloatingAnimation(4, 1, 20)}
      />
      <motion.img
        src={islandWithDoor}
        alt="Island with door"
        className="absolute bottom-[2dvh] -left-[6dvw] w-[70dvw] h-auto object-contain"
        variants={leftToRightVariants}
        animate={getFloatingAnimation(4, 0, 20)}
      />
      <motion.img
        src={legoCharacter}
        alt="Mateo"
        className="absolute bottom-[calc(2dvh+150px)] left-[calc(-6dvw+90px)] w-[32dvw] h-auto object-contain"
        custom={true}
        variants={fadeInVariants}
        animate={getFloatingAnimation(4, 0, 20)}
      />
      <motion.img
        src={onboardSpeechCloud1}
        alt="Hi I'm Mateo. My friends and I need your help"
        className="absolute top-[6dvh] right-[8dvw] w-[60%] h-auto object-contain"
        variants={rightToLeftVariants}
      />
    </motion.div>
  );
};
