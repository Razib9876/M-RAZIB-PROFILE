import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HiOutlineDocumentDownload, HiOutlineUser } from "react-icons/hi";

const SlidingText = () => {
  const phrases = [
    "write clean, maintainable code",
    "design intuitive user experiences",
    "turn ideas into real products",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 w-full ">
      {/* 1. Short Description (Approx 250 chars) */}
      <p
        className="
text-zinc-500 dark:text-zinc-400
tracking-wide transition-colors duration-500 
text-[clamp(1.125rem,1vw+1rem,3rem)]
"
      >
        Full Stack Developer passionate about building modern, scalable web
        applications with clean architecture, strong backend logic, and
        user-focused design.
        <span
          className="block text-zinc-500 dark:text-zinc-400 tracking-wide  
text-[clamp(1.125rem,1vw+1rem,3rem)] transition-colors duration-500"
        >
          My goal is to{" "}
          <span className="relative inline-block h-16 w-full text-left align-bottom overflow-hidden ml-1 ">
            <AnimatePresence mode="wait">
              <motion.span
                key={phrases[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute left-0 text-blue-600 dark:text-blue-400 font-semibold whitespace-nowrap"
              >
                {phrases[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </p>
    </div>
  );
};

export default SlidingText;
