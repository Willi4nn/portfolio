import { PROJECTS } from '@/data/projects';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/fade-in';
import ProjectCard from '../ui/project-card';

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Meus <span className="text-cyan-500">Projetos</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-12 px-6 md:gap-16">
          {PROJECTS.map((project, i) => (
            <StaggerItem key={project.title + i}>
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
