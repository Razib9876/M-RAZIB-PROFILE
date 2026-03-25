import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex justify-around items-center  gap-2
                     border border-zinc-300 dark:border-zinc-700
                     py-3 mb-8 text-sm tracking-widest
                     hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                     transition-all w-full "
    >
      <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
        Theme
      </span>

      <div className="relative w-6 h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xl text-blue-500"
          >
            {theme === "dark" ? <HiMoon /> : <HiSun />}
          </motion.div>
        </AnimatePresence>
      </div>
    </button>
  );
};

export default ThemeToggle;
