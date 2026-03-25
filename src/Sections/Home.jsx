// import { motion } from "framer-motion";
// import { HiChevronDoubleDown } from "react-icons/hi";
// import { TypeAnimation } from "react-type-animation";
// import InteractiveBackground from "../components/InteractiveBackground";
// import SlidingText from "../components/SlidingText";

// import profileImage from "../assets/profileImageBlackAndWhite.jpeg";
// import { MdDownload } from "react-icons/md";

// const Home = () => {
//   const handleScrollToAbout = () => {
//     const section = document.getElementById("about");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative w-full overflow-hidden bg-white dark:bg-black transition-colors duration-500 h-[100vh]"
//     >
//       {/* 1. Background Base */}
//       <div className="absolute inset-0 bg-white dark:bg-black transition-colors duration-500" />

//       {/* 2. Interactive Particles Layer */}
//       <div className="absolute inset-0 pointer-events-none">
//         <InteractiveBackground />
//       </div>

//       {/* 3. Main Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-16"
//       >
//         {/* IMAGE (TOP ON MOBILE) */}
//         <div className="flex justify-center items-center mb-10 lg:mb-0 lg:order-2">
//           <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full border-[8px] border-zinc-300/50 dark:border-white/10 overflow-hidden shadow-2xl">
//             <img
//               src={profileImage}
//               alt="M.Razib"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* TEXT CONTENT */}
//         <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:order-1">
//           {/* Name */}
//           <h1 className="text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase text-gray-900 dark:text-white mb-6 font-serif transition-colors duration-500">
//             M.Razib
//           </h1>

//           {/* Typewriter */}
//           <div className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl tracking-wide transition-colors duration-500 mb-6">
//             <TypeAnimation
//               sequence={[
//                 "I'm a Full Stack Developer",
//                 2000,
//                 "I design clean user experiences",
//                 2000,
//                 "I turn ideas into real products",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               cursor={true}
//             />
//           </div>

//           {/* Sliding Text */}
//           <SlidingText />

//           {/* Buttons (ROW on all screens) */}
//           <div className="flex flex-row items-center justify-center lg:justify-start gap-4 mt-8">
//             {/* About Me Button */}
//             <button
//               onClick={handleScrollToAbout}
//               className="px-6 py-3 text-sm tracking-[0.2em]
//                border border-zinc-400 dark:border-zinc-600
//                text-black dark:text-white
//                hover:bg-black hover:text-white
//                dark:hover:bg-white dark:hover:text-black
//                transition-all duration-300
//                shadow-sm hover:shadow-lg"
//             >
//               ABOUT ME
//             </button>

//             {/* Download CV Button */}
//             <a
//               href="/cv.pdf"
//               download
//               className="flex items-center gap-2 px-6 py-3 text-sm tracking-[0.2em]
//                border border-zinc-400 dark:border-zinc-600
//                text-black dark:text-white
//                hover:bg-black hover:text-white
//                dark:hover:bg-white dark:hover:text-black
//                transition-all duration-300
//                shadow-sm hover:shadow-lg"
//             >
//               <MdDownload className="text-lg" />
//               DOWNLOAD CV
//             </a>
//           </div>
//         </div>
//       </motion.div>

//       {/* SCROLL BUTTON */}
//       <motion.button
//         onClick={handleScrollToAbout}
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2
//                    text-gray-900 dark:text-white/60 z-20"
//       >
//         <HiChevronDoubleDown size={30} />
//       </motion.button>
//     </section>
//   );
// };

// export default Home;
import { motion } from "framer-motion";
import { HiChevronDoubleDown } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import InteractiveBackground from "../components/InteractiveBackground";
import SlidingText from "../components/SlidingText";

import profileImage from "../assets/profileImageBlackAndWhite.jpeg";
import { MdDownload } from "react-icons/md";

const Home = () => {
  const handleScrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white dark:bg-black transition-colors duration-500 h-[100vh]"
    >
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
        className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-16"
      >
        {/* IMAGE (TOP ON MOBILE) */}
        <div className="flex justify-center items-center mb-10 lg:mb-0 lg:order-2">
          <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full border-[8px] border-zinc-300/50 dark:border-white/10 overflow-hidden shadow-2xl">
            <img
              src={profileImage}
              alt="M.Razib"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:order-1">
          {/* Name */}
          <h1
            className="
  font-bold font-serif uppercase
  tracking-[0.2em]
  text-gray-900 dark:text-white
  mb-6
  transition-colors duration-500
  text-[clamp(2rem,4vw+1rem,5.5rem)]
"
          >
            M.Razib
          </h1>

          {/* Typewriter */}
          <div className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl tracking-wide transition-colors duration-500 mb-6">
            <TypeAnimation
              sequence={[
                "I'm a Full Stack Developer",
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
          </div>

          {/* Sliding Text */}
          <SlidingText />

          {/* Buttons (ROW on all screens) */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-4 mt-8">
            {/* About Me Button */}
            <button
              onClick={handleScrollToAbout}
              className="px-6 py-3 text-sm tracking-[0.2em]
               border border-zinc-400 dark:border-zinc-600
               text-black dark:text-white
               hover:bg-black hover:text-white
               dark:hover:bg-white dark:hover:text-black
               transition-all duration-300
               shadow-sm hover:shadow-lg"
            >
              ABOUT ME
            </button>

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 text-sm tracking-[0.2em]
               border border-zinc-400 dark:border-zinc-600
               text-black dark:text-white
               hover:bg-black hover:text-white
               dark:hover:bg-white dark:hover:text-black
               transition-all duration-300
               shadow-sm hover:shadow-lg"
            >
              <MdDownload className="text-lg" />
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </motion.div>

      {/* SCROLL BUTTON */}
      <motion.button
        onClick={handleScrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2
                   text-gray-900 dark:text-white/60 z-20"
      >
        <HiChevronDoubleDown size={30} />
      </motion.button>
    </section>
  );
};

export default Home;
