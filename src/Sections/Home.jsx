import { motion } from "framer-motion";
import { HiChevronDoubleDown } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import InteractiveBackground from "../components/InteractiveBackground";
import SlidingText from "../components/SlidingText";

import profileImage from "../assets/profileImageBlackAndWhite.jpeg";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      <section className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-black transition-colors duration-500">
        {/* 1. Background Base */}
        <div className="absolute inset-0 bg-white dark:bg-black transition-colors duration-500" />

        {/* 2. Interactive Particles Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <InteractiveBackground />
        </div>

        {/* 3. Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full h-full flex flex-col justify-center items-center"
        >
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full border-[8px] border-zinc-300/50 dark:border-white/10 overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="M.Razib"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase text-gray-900 dark:text-white mb-4 font-serif transition-colors duration-500 text-center">
            M.Razib
          </h1>

          {/* Typewriter */}
          <div className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl tracking-wide transition-colors duration-500 text-center">
            <TypeAnimation
              sequence={[
                "I'm a Full Stack Developer",
                2000,
                "I build scalable web applications",
                2000,
                "I design clean user experiences",
                2000,
                "I turn ideas into real products",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
            <SlidingText />
          </div>
        </motion.div>

        {/* 4. Scroll Icon */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-900 dark:text-white/60 z-20 transition-colors duration-500"
        >
          <HiChevronDoubleDown size={30} />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
