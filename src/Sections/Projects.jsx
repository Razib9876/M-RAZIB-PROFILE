import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

const projectData = [
  {
    title: "AI Dashboard Ultra",
    description:
      "A high-performance analytics dashboard with real-time data visualization and dark mode support.",
    image:
      "https://images.unsplash.com/photo-1551288049-bbb652167c8a?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind", "Recharts"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Smooth",
    description:
      "Full-stack shopping experience with Framer Motion transitions and Stripe integration.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Framer Motion", "Supabase"],
    github: "#",
    demo: "#",
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <Section id="projects">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
        <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
