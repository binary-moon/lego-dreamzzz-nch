import { motion, AnimatePresence } from "framer-motion";

import "./App.css";
import { Intro } from "./components/Intro";
import { Onboarding } from "./components/Onboarding";
import { SelectDifficulty } from "./components/SelectDifficulty";
import { SelectPlayArea } from "./components/SelectPlayArea";
import { FinalScreen } from "./components/FinalScreen";
import { useStore } from "./useStore";

import usePreloadImages from "./hooks/usePreloadImages";

import logo from "./assets/images/lego-lockup.png";
import title1 from "./assets/images/Settings_1_Text_Cloud.svg";
import backgroundPattern from "./assets/images/Background_Pattern.png";
import title2 from "./assets/images/Settings_2_Text_Cloud.png";
import playAreaSmall from "./assets/images/Play_Area_Small.png";
import playAreaMedium from "./assets/images/Play_Area_Medium.png";
import playAreaLarge from "./assets/images/Play_Area_Large.png";
import background from "./assets/images/sky-background.jpg";
import introFrame from "./assets/images/intro-clouds-top.png";
import darkRockIsland from "./assets/images/dark-rock-island.png";
import rocks from "./assets/images/rocks.png";
import darkCharacters from "./assets/images/dark-characters.png";
import skullIsland from "./assets/images/skull-island.png";
import islandWithDoor from "./assets/images/island-with-door.png";
import legoCharacter from "./assets/images/lego-character.png";
import theNeverWitch from "./assets/images/the-never-witch.png";
import spiral from "./assets/images/spiral.png";
import cloudsTop from "./assets/images/clouds_top.png";
import cloudsBottom from "./assets/images/clouds_bottom.png";
import lightChracterIsland1 from "./assets/images/light_character_island_1.png";
import lightChracterIsland2 from "./assets/images/light_character_island_2.png";
import onboardSpeechCloud1 from "./assets/images/Onboard_Speech_Cloud_1.svg";
import relem from "./assets/images/Relem.png";
import lightChracterIsland3 from "./assets/images/light_character_island_3.png";
import mateoPointingIsland from "./assets/images/Mateo_Pointing_Island.png";
import theNeverWitch2 from "./assets/images/The_Never_Witch_2.png";
import onboardSpeechCloud2 from "./assets/images/Onboard_Speech_Cloud_2.svg";
import onboardSpeechCloud3 from "./assets/images/Onboard_Speech_Cloud_3.svg";
import lightChracterIsland4 from "./assets/images/light_character_island_4.png";
import endScreenTextCloud from "./assets/images/End_Screen_Text_Cloud.svg";
import endScreenImage from "./assets/images/End_Screen_Image.png";
import cloud0of5 from "./assets/images/0of5Cloud.png";
import cloud1of5 from "./assets/images/1of5Cloud.png";
import cloud2of5 from "./assets/images/2of5Cloud.png";
import cloud3of5 from "./assets/images/3of5Cloud.png";
import cloud4of5 from "./assets/images/4of5Cloud.png";
import cloud5of5 from "./assets/images/5of5Cloud.png";
import legoCharacter2 from "./assets/images/Lego_Character_2.png";
import mateoPointing from "./assets/images/Mateo_Pointing.png";
import mainCTAButton from "./assets/images/Main_CTA_Button.svg";
import primeVideoLogo from "./assets/images/Prime_Video_Logo.svg";

const imageUrls = [
  logo,
  title1,
  backgroundPattern,
  title2,
  playAreaSmall,
  playAreaMedium,
  playAreaLarge,
  background,
  introFrame,
  darkRockIsland,
  rocks,
  darkCharacters,
  skullIsland,
  islandWithDoor,
  legoCharacter,
  theNeverWitch,
  spiral,
  cloudsTop,
  cloudsBottom,
  lightChracterIsland1,
  lightChracterIsland2,
  onboardSpeechCloud1,
  relem,
  lightChracterIsland3,
  mateoPointingIsland,
  theNeverWitch2,
  onboardSpeechCloud2,
  onboardSpeechCloud3,
  lightChracterIsland4,
  endScreenTextCloud,
  endScreenImage,
  cloud0of5,
  cloud1of5,
  cloud2of5,
  cloud3of5,
  cloud4of5,
  cloud5of5,
  legoCharacter2,
  mateoPointing,
  mainCTAButton,
  primeVideoLogo,
];

// Assuming gameState is of type number
function App(): JSX.Element {
  usePreloadImages(imageUrls);
  const gameState = useStore((state) => state.gameState) as number; // Explicitly cast if necessary

  return (
    <div className="flex flex-col w-full h-full absolute top-0 left-0 bg-background text-white overflow-hidden font-external">
      <AnimatePresence>
        {gameState === 0 && (
          <motion.div
            key="intro"
            className="flex flex-col w-full h-full absolute top-0 left-0 overflow-hidden"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Intro />
          </motion.div>
        )}
        {gameState === 1 && (
          <motion.div
            key="onboarding"
            className="flex flex-col w-full h-full absolute top-0 left-0 overflow-hidden"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Onboarding />
          </motion.div>
        )}
        {gameState === 2 && (
          <motion.div
            key="onboarding"
            className="flex flex-col w-full h-full absolute top-0 left-0 overflow-hidden"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <SelectDifficulty />
          </motion.div>
        )}
        {gameState === 3 && (
          <motion.div
            key="game"
            className="flex flex-col w-full h-full absolute top-0 left-0 overflow-hidden"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <SelectPlayArea />
          </motion.div>
        )}
        {gameState === 4 && (
          <motion.div
            key="game"
            className="flex flex-col w-full h-full absolute top-0 left-0 overflow-hidden"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FinalScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
