import { motion, AnimatePresence } from "framer-motion";

import "./App.css";
import { Intro } from "./components/Intro";
import { Onboarding } from "./components/Onboarding";
import { SelectDifficulty } from "./components/SelectDifficulty";
import { useStore } from "./useStore";

// Assuming gameState is of type number
function App(): JSX.Element {
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
            {/* Game component */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
