import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

import relem from "../assets/images/Relem.png";
import rocks from "../assets/images/rocks.png";
import lightChracterIsland3 from "../assets/images/light_character_island_3.png";
import mateoPointingIsland from "../assets/images/Mateo_Pointing_Island.png";
import darkRockIsland from "../assets/images/dark-rock-island.png";
import theNeverWitch2 from "../assets/images/The_Never_Witch_2.png";
import onboardSpeechCloud2 from "../assets/images/Onboard_Speech_Cloud_2.svg";

import {
  containerVariants,
  rightToLeftVariants,
  leftToRightVariants,
  bottomRightToTopVariants,
  getFloatingAnimation,
  getFadeInVariants,
} from "../utilities/animations";

export const OnboardingStep2: React.FC = () => {
  const witchControls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      await witchControls.start("visible");

      witchControls.start("floating");
    };
    sequence();
  }, [witchControls]);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.img
        src={relem}
        alt="Relem"
        className="absolute top-[36dvh] -left-[4dvw] w-[18%] h-auto object-contain"
        variants={leftToRightVariants}
        animate={getFloatingAnimation(5, 2, 10)}
      />
      <motion.img
        src={rocks}
        alt="rocks"
        className="absolute bottom-[2dvh] right-[0] w-[60%] h-auto object-contain"
        variants={rightToLeftVariants}
        animate={getFloatingAnimation(5, 2, 10)}
      />
      <motion.img
        src={lightChracterIsland3}
        alt="Light Character Island 3"
        className="absolute top-[23dvh] left-[1dvw] w-[20%] h-auto object-contain"
        variants={leftToRightVariants}
        animate={getFloatingAnimation(5, 0, 10)}
      />
      <motion.img
        src={mateoPointingIsland}
        alt="Mateo Pointing Island"
        className="absolute top-[38dvh] left-[5dvw] w-[40%] h-auto object-contain"
        variants={leftToRightVariants}
        animate={getFloatingAnimation(5, 1, 10)}
      />
      <motion.img
        src={darkRockIsland}
        className="absolute -bottom-[7dvh] -right-[10dvw] w-[70dvw] h-auto object-contain"
        alt="Dark Rock Island"
        variants={bottomRightToTopVariants}
      />
      <motion.img
        src={theNeverWitch2}
        alt="The Never Witch"
        className="absolute bottom-[15dvh] -right-[13dvw] w-[90%] h-auto object-contain"
        initial="hidden"
        animate={witchControls}
        variants={{
          hidden: bottomRightToTopVariants.hidden,
          visible: bottomRightToTopVariants.visible,
          floating: getFloatingAnimation(4, 0, 20),
        }}
      />

      <motion.img
        src={onboardSpeechCloud2}
        alt="Dream world is under attack from the Never Witch"
        className="absolute top-[8dvh] left-[3dvw] w-[60%] h-auto object-contain"
        variants={getFadeInVariants(0.85)}
      />
    </motion.div>
  );
};
