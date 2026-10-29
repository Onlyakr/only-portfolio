import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";

const ProjectGrid = () => (
  <div className="bg-border grid gap-px md:grid-cols-2">
    {projects.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ))}
  </div>
);
export default ProjectGrid;
