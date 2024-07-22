import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Checkbox } from "./Checkbox";
import { Button } from "./Button";

import { useStore } from "../useStore";

export const TCModal: React.FC = () => {
  const setGameState = useStore((state) => state.setGameState);
  const [checkboxes, setCheckboxes] = useState([
    {
      id: 1,
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.",
      isChecked: false,
    },
    {
      id: 2,
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.",
      isChecked: false,
    },
    {
      id: 3,
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.",
      isChecked: false,
    },
  ]);

  const [allChecked, setAllChecked] = useState(false);

  const handleCheckboxChange = (id: number, checked: boolean) => {
    setCheckboxes(
      checkboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, isChecked: checked } : checkbox
      )
    );
  };

  useEffect(() => {
    setAllChecked(checkboxes.every((checkbox) => checkbox.isChecked));
  }, [checkboxes]);

  return (
    <div className="bg-white w-full h-full flex flex-col gap-8  py-6 px-12">
      <span className="text-[50px]/[1] text-secondary italic black">
        HEY PARENTS
      </span>
      <span className="text-body italic black text-[20px]/[22px] -mx-5">
        Before starting parents need to agree to our T&Cs. We recommend that
        parents also help their child through game-play options and device
        approvals.
      </span>
      <div className="flex flex-col gap-6 -mx-5">
        {checkboxes.map((checkbox) => (
          <Checkbox
            key={checkbox.id}
            label={checkbox.label}
            isChecked={checkbox.isChecked}
            onCheckboxChange={(checked) =>
              handleCheckboxChange(checkbox.id, checked)
            }
          />
        ))}
      </div>
      {allChecked && (
        <motion.div
          className="absolute bottom-24 left-[50%]"
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          transition={{ duration: 0.3, easeInOut: "spring" }}
        >
          <Button
            className="w-[66dvw]"
            text="I've read and agree"
            onClick={() => setGameState(1)}
          />
        </motion.div>
      )}
    </div>
  );
};
