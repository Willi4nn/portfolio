import {
  SiAxios,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGoogle,
  SiJest,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
} from 'react-icons/si';

export const PROJECTS = [
  {
    image: '/images/cafe-street.png',
    title: 'Cafe Street',
    year: 2024,
    description:
      'E-commerce de cafés que desenvolvi com React e Stripe Checkout. Esse projeto foi feito para eu me desenvolver com contextos globais usando Context API, onde implementei adição e remoção de produtos no carrinho, formulário de endereço, busca de CEP e integração com Stripe.',
    skills: [
      { icon: SiReact, name: 'React' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind' },
      { icon: SiVite, name: 'Vite' },
      { icon: SiStripe, name: 'Stripe API' },
      { icon: SiExpress, name: 'Express' },
    ],
    projectUrl: 'https://cafe-street-zeta.vercel.app/',
    githubUrl: 'https://github.com/Willi4nn/cafe-street',
  },
  {
    image: '/images/weather-wise.png',
    title: 'Weather Wise',
    year: 2023,
    description:
      'Aplicativo de previsão do tempo que criei com React e OpenWeatherMap API. Implementei busca por cidade, exibição de temperatura, umidade, vento e ícones dinâmicos. Nesse projeto aprendi integração com API, uso do Axios, pesquisa de cidades e CSS responsivo no mobile.',
    skills: [
      { icon: SiReact, name: 'React' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiAxios, name: 'Axios' },
      { icon: SiExpo, name: 'Expo' },
    ],
    projectUrl: 'https://weather-wise--a2j0aj6d03.expo.app/',
    githubUrl: 'https://github.com/Willi4nn/weather-wise',
  },
  {
    image: '/images/realtime-chat.png',
    title: 'Realtime Chat',
    year: 2025,
    description:
      'Chat em tempo real que desenvolvi com React e Firebase. Implementei autenticação com Email e Google, Firestore, Realtime Database, e deixei totalmente responsivo. Nesse projeto experienciei a integração do Firebase para salvar usuários e conversas, autenticação e Google Auth.',
    skills: [
      { icon: SiReact, name: 'React' },
      { icon: SiVite, name: 'Vite' },
      { icon: SiFirebase, name: 'Firebase' },
      { icon: SiGoogle, name: 'Google Auth' },
      { icon: SiTailwindcss, name: 'Tailwind' },
      { icon: SiTypescript, name: 'TypeScript' },
    ],
    githubUrl: 'https://github.com/Willi4nn/realtime-chat',
  },
  {
    image: '/images/mern-auth.png',
    title: 'MERN Auth',
    year: 2024,
    description:
      'Sistema de autenticação completa que construí com MERN + TypeScript. Implementei login social, JWT, validação com Zod, rotas protegidas e envio de email. Aprendi sobre cadastro, login normal e com Google, salvar senha criptografada, testes gerais com Jest, JWT, middleware, rotas protegidas, MongoDB e Tailwind.',
    skills: [
      { icon: SiReact, name: 'React' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiJest, name: 'Jest' },
      { icon: SiZod, name: 'Zod' },
      { icon: SiAxios, name: 'Axios' },
      { icon: SiTailwindcss, name: 'Tailwind' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiExpress, name: 'Express' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiGoogle, name: 'Google OAuth' },
    ],
    projectUrl: 'https://mern-auth-ruby.vercel.app/',
    githubUrl: 'https://github.com/Willi4nn/mern-auth',
  },
];
