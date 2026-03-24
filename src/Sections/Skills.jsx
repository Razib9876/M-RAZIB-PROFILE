import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-12">Technical Proficiencies</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(59, 130, 246, 0.1)",
            }}
            className="flex flex-col items-center justify-center p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors"
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
