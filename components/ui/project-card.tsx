import { Skill } from '@/types/skill';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Button } from './button';
import { SkillBadge } from './skill-badge';

interface ProjectCardProps {
  reverse?: boolean;
  image: string;
  title: string;
  year: number;
  description: string;
  skills: Skill[];
  projectUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  reverse = false,
  image,
  title,
  year,
  description,
  skills,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-8 md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="relative block h-full shrink-0 overflow-hidden rounded-lg md:h-auto md:w-1/2">
        <Image
          className="scale-[0.98] object-cover object-center transition-transform hover:scale-100"
          src={image}
          width={1200}
          height={900}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="mb-12 flex flex-col">
        <h3 className="mb-4 text-2xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-300">{year}</p>
        <p className="mb-4 text-gray-300">{description}</p>
        <div className="mb-4 flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <SkillBadge
              key={skill.name + i}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          {projectUrl && (
            <Button
              className="flex items-center gap-2 bg-cyan-500 px-3 py-2 hover:bg-cyan-600/80"
              aria-label="Ver Projeto"
              asChild
            >
              <a href={projectUrl} target="_blank">
                <FaExternalLinkAlt className="h-5! w-5!" />
                <span className="text-lg font-semibold">Ver Projeto</span>
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="secondary"
              className="flex items-center gap-2 px-3 py-2"
              aria-label="Código Fonte"
              asChild
            >
              <a href={githubUrl} target="_blank">
                <FaGithub className="h-5! w-5!" />
                <span className="text-lg font-semibold">Código Fonte</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
