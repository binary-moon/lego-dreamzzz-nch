import { motion } from "framer-motion";

import { Button } from "./Button";

import { useStore } from "../useStore";

export const TCModal: React.FC = () => {
  const setAppState = useStore((state) => state.setAppState);

  const itemStyles = "text-body text-[20px]/[23px] text-left mb-2";

  return (
    <div className="bg-white w-full h-full flex flex-col gap-6  py-6 px-12">
      <span className="text-[25px]/[25px] text-secondary italic black">
        HEY PARENTS
      </span>
      <span className="text-body italic black text-[20px]/[23px] -mx-5">
        Before starting please take a second to take note of the below points.
      </span>
      <div className="flex flex-col -mr-5">
        <ul className="list-disc">
          <li className={itemStyles}>
            This game requires access to camera and device data during play.
          </li>
          <li className={itemStyles}>
            Very young players might need parental help with permissions and
            settings.
          </li>
          <li className={itemStyles}>
            Please set a safe play area for your current surroundings.
          </li>
          <li className={itemStyles}>
            This game runs best on iOS11+ or the recent versions of Chrome and
            Firefox on Android.
          </li>
        </ul>
      </div>

      <motion.div
        className="absolute bottom-16 left-[50%]"
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        initial={{ opacity: 0, y: 20, x: "-50%" }}
        transition={{ duration: 0.3, easeInOut: "spring" }}
      >
        <Button
          className="w-[66dvw]"
          text="I Understand"
          onClick={() => setAppState(1)}
        />
      </motion.div>
    </div>
  );
};
