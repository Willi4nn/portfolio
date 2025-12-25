import { IconKey } from '@/lib/icons';

interface ProjectSkill {
  icon: IconKey;
  name: string;
}

interface Project {
  image: string;
  title: string;
  year: number;
  description: string;
  skills: ProjectSkill[];
  projectUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    image: '/images/cafe-street.png',
    title: 'Cafe Street',
    year: 2024,
    description:
      'E-commerce de cafés que desenvolvi com React e Stripe Checkout. Esse projeto foi feito para eu me desenvolver com contextos globais usando Context API, onde implementei adição e remoção de produtos no carrinho, formulário de endereço, busca de CEP e integração com Stripe.',
    skills: [
      { icon: 'react', name: 'React' },
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'tailwind', name: 'Tailwind' },
      { icon: 'stripe', name: 'Stripe API' },
      { icon: 'express', name: 'Express' },
    ],
    projectUrl: 'https://cafe-street-zeta.vercel.app/',
    githubUrl: 'https://github.com/Willi4nn/cafe-street',
  },
  {
    image: '/images/realtime-chat.png',
    title: 'Realtime Chat',
    year: 2025,
    description:
      'Chat em tempo real que desenvolvi com React e Firebase. Implementei autenticação com Email e Google, Firestore, Realtime Database, e deixei totalmente responsivo. Nesse projeto experienciei a integração do Firebase para salvar usuários e conversas, autenticação e Google Auth.',
    skills: [
      { icon: 'react', name: 'React' },
      { icon: 'firebase', name: 'Firebase' },
      { icon: 'google', name: 'Google Auth' },
      { icon: 'tailwind', name: 'Tailwind' },
      { icon: 'typescript', name: 'TypeScript' },
    ],
    projectUrl: 'https://realtime-chat-delta-one.vercel.app/login',
    githubUrl: 'https://github.com/Willi4nn/realtime-chat',
  },
  {
    image: '/images/mern-auth.png',
    title: 'MERN Auth',
    year: 2024,
    description:
      'Sistema de autenticação completa que construí com MERN + TypeScript. Implementei login social, JWT, validação com Zod, rotas protegidas e envio de email. Aprendi sobre cadastro, login normal e com Google, salvar senha criptografada, testes gerais com Jest, JWT, middleware, rotas protegidas, MongoDB e Tailwind.',
    skills: [
      { icon: 'react', name: 'React' },
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'jest', name: 'Jest' },
      { icon: 'zod', name: 'Zod' },
      { icon: 'axios', name: 'Axios' },
      { icon: 'tailwind', name: 'Tailwind' },
      { icon: 'nodejs', name: 'Node.js' },
      { icon: 'express', name: 'Express' },
      { icon: 'mongodb', name: 'MongoDB' },
      { icon: 'google', name: 'Google OAuth' },
    ],
    projectUrl: 'https://mern-auth-ruby.vercel.app/',
    githubUrl: 'https://github.com/Willi4nn/mern-auth',
  },
  {
    image: '/images/revest.png',
    title: 'Revest',
    year: 2025,
    description:
      'Desenvolvi o Revest para resolver um problema real na estofaria do meu pai: a duvida de alguns clientes na hora de escolher o tecido certo para o móvel. O projeto utiliza a API do Gemini para gerar prévias realistas de reestofamento, mantendo a iluminação e geometria original. Enfrentei desafios técnicos como engenharia de prompt para reconstrução de móveis, conversão de imagens no cliente (AVIF/HEIC) e implementação de resiliência na API com retry inteligente e fallback de modelos.',
    skills: [
      { icon: 'react', name: 'React' },
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'tailwind', name: 'Tailwind' },
      { icon: 'google', name: 'Gemini API' },
    ],
    projectUrl: 'https://revest-rho.vercel.app/',
    githubUrl: 'https://github.com/Willi4nn/revest',
  },
  {
    image: '/images/weather-wise.png',
    title: 'Weather Wise',
    year: 2023,
    description:
      'Aplicativo de previsão do tempo que criei com React e OpenWeatherMap API. Implementei busca por cidade, exibição de temperatura, umidade, vento e ícones dinâmicos. Nesse projeto aprendi integração com API, uso do Axios, pesquisa de cidades e CSS responsivo no mobile.',
    skills: [
      { icon: 'react', name: 'React' },
      { icon: 'typescript', name: 'TypeScript' },
      { icon: 'axios', name: 'Axios' },
      { icon: 'expo', name: 'Expo' },
    ],
    projectUrl: 'https://weather-wise--a2j0aj6d03.expo.app/',
    githubUrl: 'https://github.com/Willi4nn/weather-wise',
  },
];
