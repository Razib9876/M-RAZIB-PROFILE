import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const About = () => {
  return (
    <section
      id="about"
      className="bg-base-100 min-h-screen  flex  transition-colors duration-300"
    >
      <div className="w-full px-6 w-full">
        {/* Simple Header - Logo Style */}
        <div className="mb-10 border-l-8 border-base-content pl-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-base-content">
            About <br />
            <span className="opacity-30">Me.</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-12 gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-base-content">
              I'm Mohammad Razib
            </h3>

            <div className="space-y-6 text-lg text-base-content/70 leading-relaxed font-medium">
              <p>
                I studied Management, but later discovered my passion for web
                development and started learning it.
              </p>

              <p className="text-base-content">
                I enjoy solving real-world problems. I built a local solution
                with a bidding system, which challenged me to work with data
                structures, backend logic, and TypeScript as a fresher.
              </p>

              <p>
                Recently, I'm working with local business owners about building
                modern, maintainable custom-coded e-commerce websites and
                improving their branding.
              </p>

              <p className="text-base-content font-bold underline decoration-1 underline-offset-8">
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
            <div className="bg-base-content text-base-100 p-8 rounded-none border border-base-content">
              <h4 className="text-xs uppercase tracking-[0.3em] mb-6 opacity-70">
                Core Focus
              </h4>
              <ul className="space-y-4 font-bold text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-base-100 rotate-45"></span>
                  Real-world problem solving
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-base-100 rotate-45"></span>
                  Backend & API development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-base-100 rotate-45"></span>
                  Scalable architecture focus
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-base-100 rotate-45"></span>
                  Creative & design interest
                </li>
              </ul>
            </div>

            {/* Subtle Button */}
            <div className="mb-4 mt-6 w-full">
              {/* Download CV */}
              <a
                href="/cv.pdf"
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
