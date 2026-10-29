import ProjectGrid from "@/components/project-grid";
import Section from "@/components/section";

const Projects = () => {
  return (
    <>
      <h1 className="px-6 py-12 text-4xl font-bold tracking-tight md:px-10 md:py-16">
        Projects
      </h1>

      <Section flush>
        <ProjectGrid />
      </Section>
    </>
  );
};
export default Projects;
