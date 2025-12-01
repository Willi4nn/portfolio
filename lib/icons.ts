import dynamic from 'next/dynamic';

export const iconMap = {
  typescript: dynamic(() =>
    import('react-icons/si').then((m) => m.SiTypescript)
  ),
  javascript: dynamic(() =>
    import('react-icons/si').then((m) => m.SiJavascript)
  ),
  react: dynamic(() => import('react-icons/si').then((m) => m.SiReact)),
  nextjs: dynamic(() => import('react-icons/si').then((m) => m.SiNextdotjs)),
  tailwind: dynamic(() =>
    import('react-icons/si').then((m) => m.SiTailwindcss)
  ),
  nodejs: dynamic(() => import('react-icons/si').then((m) => m.SiNodedotjs)),
  express: dynamic(() => import('react-icons/si').then((m) => m.SiExpress)),
  python: dynamic(() => import('react-icons/si').then((m) => m.SiPython)),
  mongodb: dynamic(() => import('react-icons/si').then((m) => m.SiMongodb)),
  postgresql: dynamic(() =>
    import('react-icons/si').then((m) => m.SiPostgresql)
  ),
  git: dynamic(() => import('react-icons/si').then((m) => m.SiGit)),
  jest: dynamic(() => import('react-icons/si').then((m) => m.SiJest)),
  cypress: dynamic(() => import('react-icons/si').then((m) => m.SiCypress)),
  postman: dynamic(() => import('react-icons/si').then((m) => m.SiPostman)),
  docker: dynamic(() => import('react-icons/si').then((m) => m.SiDocker)),
  firebase: dynamic(() => import('react-icons/si').then((m) => m.SiFirebase)),
  google: dynamic(() => import('react-icons/si').then((m) => m.SiGoogle)),
  gmail: dynamic(() => import('react-icons/si').then((m) => m.SiGmail)),
  github: dynamic(() => import('react-icons/si').then((m) => m.SiGithub)),
  linkedin: dynamic(() => import('react-icons/si').then((m) => m.SiLinkedin)),
  stripe: dynamic(() => import('react-icons/si').then((m) => m.SiStripe)),
  expo: dynamic(() => import('react-icons/si').then((m) => m.SiExpo)),
  whatsapp: dynamic(() => import('react-icons/si').then((m) => m.SiWhatsapp)),
  zod: dynamic(() => import('react-icons/si').then((m) => m.SiZod)),
  axios: dynamic(() => import('react-icons/si').then((m) => m.SiAxios)),
};
export type IconKey = keyof typeof iconMap;
