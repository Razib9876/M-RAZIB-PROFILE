import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Blog from "./Sections/Blog";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      {/* Mobile Navbar: Visible only < 1024px */}
      <div className="lg:hidden">
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <main className="w-full lg:ml-[22%] lg:w-[78%] min-h-screen transition-all duration-300">
        <Home />
        <About />
        <Projects />
        <Blog></Blog>
        <Contact />
      </main>
    </div>
  );
};

export default App;
