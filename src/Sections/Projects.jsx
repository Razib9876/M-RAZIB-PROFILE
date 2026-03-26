// import React from "react";
// import ProjectCard from "../components/ProjectCard";
// import projects from "../assets/projects";

// const Projects = () => {
//   return (
//     <section id="projects" className="bg-white ">
//       <div className="w-full mx-auto px-6">
//         {/* Header - Minimalist & Bold */}
//         <div className="mb-10 border-l-2 border-base-content pl-6">
//           <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase font-serif">
//             Creative Works
//           </h2>
//         </div>

//         {/* Minimalist Grid - No Gap or Small Gap */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        bg-white dark:bg-black
        transition-colors duration-500
      "
    >
      <div className="w-full mx-auto px-6">
        {/* Header */}
        <div className="mb-10 border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
          <h2
            className="
              font-bold uppercase font-serif
              tracking-[0.2em]

              text-zinc-900 dark:text-zinc-100
              transition-colors duration-500

              text-[clamp(1.5rem,4vw,2.5rem)]   /* safe scaling */
              md:text-[clamp(2rem,3vw,3.5rem)] /* bigger screens */
            "
          >
            Creative Works
          </h2>
        </div>
        {/* DESCRIPTION */}
        <p
          className="text-zinc-500 dark:text-zinc-400
tracking-wide transition-colors duration-500 
text-[clamp(0.8rem,3vw,4rem)]   
lg:text-[clamp(0.5rem,1vw+0.25rem,3rem)] mt-8 mb-8"
        >
          Here are some of the projects I’ve built while learning and solving
          real-world problems, including local solutions like Safar.
        </p>
        {/* Grid */}
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
