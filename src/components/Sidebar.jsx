import { motion, AnimatePresence } from "framer-motion";
import {
  HiX,
  HiHome,
  HiUser,
  HiBriefcase,
  HiDocumentText,
  HiMail,
} from "react-icons/hi";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { MdDownload } from "react-icons/md";

import useScrollSpy from "../hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "HOME", icon: <HiHome />, href: "#home" },
  { name: "ABOUT", icon: <HiUser />, href: "#about" },
  { name: "PROJECT", icon: <HiBriefcase />, href: "#projects" },
  { name: "BLOGS", icon: <HiDocumentText />, href: "#blogs" },
  { name: "CONTACT", icon: <HiMail />, href: "#contact" },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const activeSection = useScrollSpy([
    "home",
    "about",
    "projects",
    "blogs",
    "contact",
  ]);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const fastTransition = {
    type: "tween",
    ease: [0.4, 0, 0.2, 1],
    duration: 0.25,
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm mr-2"
            />

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={() => setIsOpen(false)}
              className="fixed left-[78%] top-1/2 -translate-y-1/2 z-[60] lg:hidden
                         bg-white dark:bg-zinc-800 p-3 rounded-full shadow-xl
                         text-black dark:text-white border border-zinc-200 dark:border-zinc-700"
            >
              <HiX size={28} />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial="closed"
        variants={sidebarVariants}
        animate={
          window.innerWidth >= 1024 ? "open" : isOpen ? "open" : "closed"
        }
        transition={fastTransition}
        className="fixed top-0 left-0 h-screen z-50
                   bg-white dark:bg-black
                   border-r border-zinc-200 dark:border-zinc-800
                   w-[80%] sm:w-[70%] lg:w-[22%]
                   flex flex-col px-10 py-12"
      >
        {/* Logo */}
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold tracking-[0.25em] text-black font-serif dark:text-white">
            M.Razib
          </h1>
          <p className="mt-2 text-sm tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
            Web Developer
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block border-b border-zinc-200 dark:border-zinc-800 py-3"
              >
                <span
                  className={`flex items-center 
text-[clamp(0.5rem,1vw,3rem)]
gap-[clamp(0.2rem,0.6vw,1rem)]  tracking-[0.3em] transition-colors
                  ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-zinc-500 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <span className="text-lg opacity-70">{item.icon}</span>
                  {item.name}
                </span>
              </a>
            );
          })}
        </nav>

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

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-xl mb-6 text-zinc-500">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-black dark:hover:text-white"
          >
            <HiMail />
          </a>

          <a
            href="https://wa.me/8800000000000"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-center border-t border-zinc-200 dark:border-zinc-800 pt-6">
          <ThemeToggle />
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-zinc-400 mt-4">
          © 2026 ADDO by DuruThemes
        </p>
      </motion.aside>
    </>
  );
};

export default Sidebar;
