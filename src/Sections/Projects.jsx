import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-white ">
      <div className="w-full mx-auto px-6">
        {/* Header - Minimalist & Bold */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black uppercase">
            Creative Works
          </h2>
          <div className="h-1 w-12 bg-black mt-4"></div>
        </div>

        {/* Minimalist Grid - No Gap or Small Gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
