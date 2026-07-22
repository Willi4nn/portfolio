import { IconKey } from '@/lib/icons';
import { motion } from 'motion/react';
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
  skills: { icon: IconKey; name: string }[];
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
      <motion.div
        className="relative block h-full shrink-0 overflow-hidden rounded-xl md:h-auto md:w-1/2"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Image
          className="h-full w-full object-cover object-center"
          src={image}
          width={1200}
          height={900}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-0" />
      </motion.div>
      <div className="mb-12 flex flex-col">
        <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
        <p className="text-neon-cyan mb-2 text-sm">{year}</p>
        <p className="mb-4 text-gray-300/90">{description}</p>
        <div className="mb-4 flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <SkillBadge
              key={skill.name + i}
              icon={skill.icon}
              name={skill.name}
              size="md"
            />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {projectUrl && (
            <Button
              className="bg-neon-cyan hover:bg-neon-cyan/80 flex items-center gap-2 text-slate-950"
              asChild
            >
              <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="h-5 w-5" />
                <span className="text-lg font-semibold">Ver Projeto</span>
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="secondary"
              className="hover:border-neon-magenta flex items-center gap-2 border border-white/20 bg-transparent hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,0,230,0.3)]"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-5 w-5" />
                <span className="text-lg font-semibold">Código Fonte</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
