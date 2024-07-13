import { motion } from "framer-motion";

interface GlowingTextProps {
  text: string;
}

export const GlowingText: React.FC<GlowingTextProps> = ({ text }) => {
  const baseGlowSize = 8;
  const baseOffsetSize = 1;
  const intensityMultiplier = 2;

  const color1 = "rgba(255, 255, 255, 0.4)";
  const color2 = "rgba(0, 255, 255, 0.4)";

  const createGlowShadow = (
    glowSize: number,
    verticalOffset: number,
    horizontalOffset: number,
    intensity: number
  ) => `
  0 0 ${glowSize * intensity}px ${color1},
  0 ${-verticalOffset * intensity}px ${glowSize * intensity}px ${color2},
  ${-horizontalOffset * intensity}px ${horizontalOffset * intensity}px ${
    (glowSize * intensity) / 2
  }px ${color1},
  ${horizontalOffset * intensity}px ${horizontalOffset * intensity}px ${
    (glowSize * intensity) / 2
  }px ${color2}
`;

  const glowKeyframes = [
    createGlowShadow(
      baseGlowSize,
      baseOffsetSize,
      baseOffsetSize / 2,
      intensityMultiplier
    ),
    createGlowShadow(
      baseGlowSize,
      baseOffsetSize,
      baseOffsetSize,
      intensityMultiplier * 2
    ),
    createGlowShadow(
      baseGlowSize,
      baseOffsetSize,
      baseOffsetSize / 2,
      intensityMultiplier
    ),
  ];

  return (
    <div className="italic font-black uppercase text-[8vh]/[6vh]">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{ textShadow: glowKeyframes }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.33, 0.66, 1],
            delay: -index * (2 / text.length),
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
