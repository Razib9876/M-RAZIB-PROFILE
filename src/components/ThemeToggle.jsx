import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all active:scale-95"
    >
      <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
        Appearance
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
