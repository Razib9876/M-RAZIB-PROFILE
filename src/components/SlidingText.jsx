import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "Building  Scalable  Systems",
  "Designing  User  Experiences",
  "Full  Stack  Developer",
  "Turning  Ideas  Into  Reality",
  "Crafting  Digital  Products",
];

const SlidingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Cinematic staggered animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
    },
    exit: {
      opacity: 0,
      y: -20,
      rotateX: -90,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className=" flex items-center ">
      <AnimatePresence mode="wait">
        <motion.div
          key={phrases[index]}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-wrap gap-x-3"
        >
          {phrases[index].split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={child}
              className="inline-block mt-2 text-sm tracking-[0.4em] text-zinc-500 dark:text-zinc-400  md:text-xl "
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlidingText;
