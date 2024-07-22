import React from "react";

import { useStore, PlayAreaSize } from "../useStore";

interface PlayAreaSelectorProps {
  playAreaSizeOptions: PlayAreaSize[];
}

export const PlayAreaSelector: React.FC<PlayAreaSelectorProps> = ({
  playAreaSizeOptions,
}) => {
  const playAreaSize = useStore((state) => state.playAreaSize);
  const setPlayAreaSize = useStore((state) => state.setPlayAreaSize);
  const optionClasses = `bg-transparent text-[25px]/[21px] py-4 px-6 font-black italic uppercase`;
  const getOptionClasses = (isActive: boolean, index: number) => {
    let modifiedClasses = optionClasses;
    if (index > 0) {
      modifiedClasses = `${modifiedClasses} border-l-2 border-white`;
    }
    if (isActive) {
      modifiedClasses = `${modifiedClasses} bg-white text-background`;
    } else {
      modifiedClasses = `${modifiedClasses} text-white`;
    }

    return modifiedClasses;
  };
  return (
    <div className="flex border-2 border-white rounded-lg">
      {playAreaSizeOptions.map((option, index) => (
        <button
          className={getOptionClasses(playAreaSize === option, index)}
          key={option}
          onClick={() => setPlayAreaSize(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
