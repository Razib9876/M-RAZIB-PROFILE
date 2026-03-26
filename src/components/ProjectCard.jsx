// import React from "react";
// import { motion } from "framer-motion";
// import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";

// const ProjectCard = ({ project, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className="group relative cursor-pointer overflow-hidden bg-gray-100 aspect-square"
//     >
//       {/* Project Image */}
//       <img
//         src={project.img}
//         alt={project.title}
//         className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//       />

//       {/* Hover Overlay */}
//       <div className="absolute inset-0 bg-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center p-6 text-center">
//         <h3 className="text-xl font-bold uppercase tracking-widest text-black mb-2">
//           {project.title}
//         </h3>
//         <p className="text-sm text-gray-600 mb-6 line-clamp-2">
//           {project.description}
//         </p>

//         {/* Action Buttons */}
//         <div className="flex gap-5">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
//             title="GitHub"
//           >
//             <FaGithub size={18} />
//           </a>
//           <a
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
//             title="Live Demo"
//           >
//             <FaExternalLinkAlt size={16} />
//           </a>
//           <a
//             href={project.BsYoutube}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
//             title="YouTube"
//           >
//             <FaYoutube size={18} />
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="
        group relative cursor-pointer overflow-hidden aspect-square

        bg-zinc-100 dark:bg-zinc-900
        transition-colors duration-500
      "
    >
      {/* Project Image */}
      <img
        src={project.img}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center p-6 text-center

          bg-white/90 dark:bg-black/80
          opacity-0 group-hover:opacity-100
          transition-all duration-300
        "
      >
        <h3
          className="
            text-[clamp(1rem,2vw,1.25rem)]
            font-bold uppercase tracking-widest mb-2

            text-zinc-900 dark:text-zinc-100
            transition-colors duration-500
          "
        >
          {project.title}
        </h3>

        <p
          className="
            text-[clamp(0.8rem,1.5vw,0.95rem)]
            mb-6 line-clamp-2

            text-zinc-600 dark:text-zinc-400
            transition-colors duration-500
          "
        >
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-3 rounded-full transition-colors

              bg-black text-white hover:bg-zinc-800
              dark:bg-white dark:text-black dark:hover:bg-zinc-300
            "
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-3 rounded-full transition-colors

              bg-black text-white hover:bg-zinc-800
              dark:bg-white dark:text-black dark:hover:bg-zinc-300
            "
            title="Live Demo"
          >
            <FaExternalLinkAlt size={16} />
          </a>

          <a
            href={project.BsYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-3 rounded-full transition-colors

              bg-black text-white hover:bg-zinc-800
              dark:bg-white dark:text-black dark:hover:bg-zinc-300
            "
            title="YouTube"
          >
            <FaYoutube size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
