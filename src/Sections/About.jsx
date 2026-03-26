import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const About = () => {
  return (
    <section
      id="about"
      className="
  bg-stone-100 dark:bg-gray-950
  min-h-screen
  transition-colors duration-500
"
    >
      <div className="w-full px-6">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-12 gap-12  items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 space-y-8"
          >
            <div className="mb-10 border-l-2 border-base-content pl-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase font-serif">
                About Me
              </h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-base-content">
              I'm Mohammad Razib
            </h3>

            <div
              className="mt-0
text-zinc-500 dark:text-zinc-400
tracking-wide transition-colors duration-500 
text-[clamp(0.8rem,3vw,4rem)]   
lg:text-[clamp(0.5rem,1vw+0.25rem,3rem)]
"
            >
              <ul className="space-y-3 list-disc pl-5 ">
                <li>
                  Build scalable and maintainable web applications using modern
                  technologies with a focus on clean architecture and
                  performance.
                </li>
                <li>
                  Developed a local bidding-based platform to solve real-world
                  problems, handling backend logic, data flow, and TypeScript
                  integration.
                </li>
                <li>
                  Currently working with local business owners to create custom
                  e-commerce platforms that improve their online presence and
                  streamline operations.
                </li>
              </ul>

              <p
                className=" 
text-zinc-500 dark:text-zinc-400
tracking-wide transition-colors duration-500 
text-[clamp(0.8rem,3vw,4rem)]   
lg:text-[clamp(0.5rem,1vw+0.25rem,3rem)]
 underline decoration-1 underline-offset-8 mt-8"
              >
                Currently, I am exploring AI, web design, and no-code tools to
                expand my skills.
              </p>
            </div>
          </motion.div>

          {/* Highlights Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <div
              className="
    p-8 border

    bg-white dark:bg-zinc-900
    border-zinc-300 dark:border-zinc-700

    transition-colors duration-500
  "
            >
              <h4
                className="
      text-2xl md:text-3xl font-bold

      text-zinc-900 dark:text-zinc-100
      transition-colors duration-500
    "
              >
                Core Focus
              </h4>

              <ul
                className="
      mt-6 space-y-4

      text-zinc-500 dark:text-zinc-400
      tracking-wide transition-colors duration-500 

      text-[clamp(0.95rem,2vw,1.2rem)]   
      lg:text-[clamp(1rem,1vw+0.3rem,1.5rem)]
    "
              >
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zinc-500 dark:bg-zinc-400 rotate-45"></span>
                  Real-world problem solving
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zinc-500 dark:bg-zinc-400 rotate-45"></span>
                  Backend & API development
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zinc-500 dark:bg-zinc-400 rotate-45"></span>
                  Scalable architecture focus
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-zinc-500 dark:bg-zinc-400 rotate-45"></span>
                  Creative & design interest
                </li>
              </ul>
            </div>

            {/* Subtle Button */}
            <div className="mb-4 mt-6 w-full">
              {/* Download CV */}
              <a
                href="src/assets/Mohammad_Razib_FlowCV_Resume_2026-03-01.pdf"
                download
                className="flex items-center justify-center gap-2
                               border border-zinc-300 dark:border-zinc-700
                               py-3 mt-6 mb-8 text-sm tracking-widest
                               hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                               transition-all"
              >
                <MdDownload />
                DOWNLOAD CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
