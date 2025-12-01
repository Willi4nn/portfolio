import { IconKey } from '@/lib/icons';

export interface Skill {
  name: string;
  icon: IconKey;
}

export const SKILLS: Skill[] = [
  { icon: 'typescript', name: 'TypeScript' },
  { icon: 'javascript', name: 'JavaScript' },
  { icon: 'react', name: 'React' },
  { icon: 'nextjs', name: 'Next.js' },
  { icon: 'react', name: 'React Native' },
  { icon: 'tailwind', name: 'Tailwind CSS' },
  { icon: 'nodejs', name: 'Node.js' },
  { icon: 'express', name: 'Express.js' },
  { icon: 'python', name: 'Python' },
  { icon: 'mongodb', name: 'MongoDB' },
  { icon: 'postgresql', name: 'PostgreSQL' },
  { icon: 'git', name: 'Git' },
  { icon: 'jest', name: 'Jest' },
  { icon: 'cypress', name: 'Cypress' },
  { icon: 'postman', name: 'Postman' },
  { icon: 'docker', name: 'Docker' },
];
