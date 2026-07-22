'use client';
import { PROJECTS } from '@/data/projects';
import { motion } from 'motion/react';
import ProjectCard from '../ui/project-card';
import { SectionTitle } from '../ui/section-title';

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto px-4">
        <SectionTitle highlighted="Projetos" className="mb-14">
          Meus
        </SectionTitle>

        <motion.div
          className="grid grid-cols-1 gap-16 md:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title + i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  },
                },
              }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
