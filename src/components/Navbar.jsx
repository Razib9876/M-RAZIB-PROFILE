import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-30 border-b border-slate-200 dark:border-slate-800">
      <span className="font-bold text-xl tracking-tight">PORTFOLIO</span>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="p-2 text-2xl bg-slate-100 dark:bg-slate-800 rounded-lg"
      >
        <HiMenuAlt3 />
      </button>
    </nav>
  );
};

export default Navbar;
