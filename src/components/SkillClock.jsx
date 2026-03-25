import { useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const SkillClock = ({ skills }) => {
  const rotation = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Smooth infinite rotation (60fps)
  useAnimationFrame((time) => {
    const newRotation = (time / 40) % 360; // Adjust speed here
    rotation.set(newRotation);

    const sectionSize = 360 / skills.length;
    const currentSkillIndex =
      Math.round(newRotation / sectionSize) % skills.length;

    if (currentSkillIndex !== activeIndex) {
      setActiveIndex(currentSkillIndex);
    }
  });

  return (
    <div className="relative flex justify-center items-center w-full h-[400px] md:h-[600px]">
      {/* OUTER CASE (Brushed Metal Effect) */}
      <div
        className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full 
                      bg-gradient-to-b from-zinc-200 to-zinc-400 dark:from-zinc-800 dark:to-black
                      p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]
                      flex items-center justify-center"
      >
        {/* INNER FACE */}
        <div className="relative w-full h-full rounded-full bg-white dark:bg-slate-950 shadow-inner flex items-center justify-center overflow-hidden">
          {/* MINUTE MARKERS */}
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-[1px] ${i % 5 === 0 ? "h-4 bg-zinc-400 dark:bg-zinc-600" : "h-2 bg-zinc-200 dark:bg-zinc-800"}`}
              style={{
                transform: `rotate(${i * 6}deg) translateY(-148px) md:translateY(-210px)`,
              }}
            />
          ))}

          {/* SKILL LABELS */}
          {skills.map((skill, index) => {
            const angle = (index * 360) / skills.length;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="absolute transition-all duration-300"
                style={{
                  transform: `rotate(${angle}deg) translateY(-110px) md:translateY(-160px)`,
                }}
              >
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0.15,
                    scale: isActive ? 1.25 : 0.85,
                    filter: isActive ? "blur(0px)" : "blur(1px)",
                  }}
                  className={`font-black tracking-tighter uppercase text-[10px] md:text-sm
                    ${isActive ? "text-black dark:text-white" : "text-zinc-400 dark:text-zinc-700"}`}
                  style={{ transform: `rotate(-${angle}deg)` }}
                >
                  {skill}
                </motion.div>
              </div>
            );
          })}

          {/* THE KATA (Realistic Watch Hand) */}
          <motion.div
            style={{ rotate: rotation }}
            className="absolute z-30 w-1 h-[42%] md:h-[45%] bottom-1/2 origin-bottom flex flex-col items-center"
          >
            {/* Pointer Tip */}
            <div className="w-0.5 h-full bg-black dark:bg-white rounded-full relative">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-black dark:bg-white" />
            </div>
            {/* Counter-weight bottom */}
            <div className="absolute -bottom-4 w-1 h-4 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
          </motion.div>

          {/* CENTER CAP (The Screwed Pin) */}
          <div className="absolute w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-900 z-40 border-2 border-zinc-300 dark:border-zinc-700 shadow-md flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400" />
          </div>

          {/* BACKGROUND BRANDING */}
          <div className="absolute top-[60%] flex flex-col items-center opacity-20 dark:opacity-40">
            <span className="text-[10px] tracking-[0.5em] font-bold uppercase">
              M. Razib
            </span>
            <span className="text-[7px] tracking-[0.2em] uppercase">
              Automatic Precision
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillClock;
