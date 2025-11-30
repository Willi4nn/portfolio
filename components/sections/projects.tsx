import { PROJECTS } from '@/data/projects';
import ProjectCard from '../ui/project-card';

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-10 border-t border-white/10 bg-transparent py-16"
    >
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Meus {''} <span className="text-cyan-500">Projetos</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 px-6">
          {PROJECTS.map((project, i) => (
            <div key={project.title + i}>
              <ProjectCard
                reverse={i % 2 === 1}
                image={project.image}
                title={project.title}
                year={project.year}
                description={project.description}
                skills={project.skills}
                projectUrl={project.projectUrl}
                githubUrl={project.githubUrl}
              />
              {i < PROJECTS.length - 1 && (
                <div className="my-4 border-b border-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
