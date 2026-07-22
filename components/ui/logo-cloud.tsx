'use client';

import { Skill } from '@/data/skills';
import { motion } from 'motion/react';
import { SkillBadge } from './skill-badge';

interface LogoCloudProps {
  skills: Skill[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export function LogoCloud({
  skills,
  speed = 30,
  direction = 'left',
  className = '',
}: LogoCloudProps) {
  return (
    <div className={`relative overflow-hidden py-8 ${className}`}>
      <motion.div
        className="flex w-max will-change-transform"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <div className="flex w-max items-center gap-6 pr-6">
          {skills.map((skill, i) => (
            <SkillBadge
              key={`skill-1-${skill.name}-${i}`}
              icon={skill.icon}
              name={skill.name}
              size="lg"
              className="px-6 py-3 text-2xl"
            />
          ))}
        </div>

        <div className="flex w-max items-center gap-6 pr-6" aria-hidden="true">
          {skills.map((skill, i) => (
            <SkillBadge
              key={`skill-2-${skill.name}-${i}`}
              icon={skill.icon}
              name={skill.name}
              size="lg"
              className="px-6 py-3 text-2xl"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
