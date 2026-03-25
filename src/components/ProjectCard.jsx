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
      className="group relative cursor-pointer overflow-hidden bg-gray-100 aspect-square"
    >
      {/* Project Image */}
      <img
        src={project.img}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-xl font-bold uppercase tracking-widest text-black mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            title="Live Demo"
          >
            <FaExternalLinkAlt size={16} />
          </a>
          <a
            href={project.BsYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
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
