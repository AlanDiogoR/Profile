export type ProjectId =
  | 'grivy'
  | 'mood-sharing'
  | 'codeleap'
  | 'verdan'
  | 'controle-financeiro'
  | 'ishop'
  | 'coffee-delivery'
  | 'todo-list'
  | 'pomodoro'
  | 'utf-projetos'
  | 'spring-user'
  | 'backend-receitas'
  | 'icall'
  | 'api-nodejs'
  | 'nodejs-curso'
  | 'exercicios-pdf'
  | 'portfolio';

export type ProjectLinkId = 'live' | 'video' | 'code';

export interface ProjectMeta {
  id: ProjectId;
  stack: readonly string[];
  image?: string;
  imageFit?: 'cover' | 'contain';
  links: readonly { id: ProjectLinkId; url: string }[];
}

/**
 * Seis projetos em destaque, por completude e sinal para recrutador.
 * O restante (exercícios de curso e estudos menores) fica recolhido.
 * Textos ficam nos dicionários. Fora desta lista: Lúcio, Bike Center,
 * Kabeção/Cabeção, Prumo, o repositório especial do perfil e forks.
 */
export const featuredProjects: readonly ProjectMeta[] = [
  {
    id: 'grivy',
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Nuxt', 'Vue 3', 'TypeScript', 'Vuetify'],
    image: '/images/projects/grivy.webp',
    links: [
      { id: 'live', url: 'https://grivy.netlify.app' },
      { id: 'video', url: 'https://youtu.be/ZRDuhOfDv9A' },
      { id: 'code', url: 'https://github.com/AlanDiogoR/Desafio-Astrocode' },
    ],
  },
  {
    id: 'mood-sharing',
    stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: '/images/projects/mood-sharing.webp',
    imageFit: 'contain',
    links: [{ id: 'code', url: 'https://github.com/AlanDiogoR/Mood-Sharing' }],
  },
  {
    id: 'codeleap',
    stack: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'Firebase', 'Tailwind CSS', 'Vitest'],
    image: '/images/projects/codeleap.webp',
    links: [
      { id: 'live', url: 'https://code-leap-test-tau.vercel.app' },
      { id: 'code', url: 'https://github.com/AlanDiogoR/CodeLeap-test' },
    ],
  },
  {
    id: 'verdan',
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Electron'],
    image: '/images/projects/verdan.webp',
    links: [{ id: 'code', url: 'https://github.com/AlanDiogoR/TCC' }],
  },
  {
    id: 'controle-financeiro',
    stack: ['React', 'TypeScript', 'Vite', 'styled-components', 'Zod', 'Radix UI'],
    image: '/images/projects/controle-financeiro.webp',
    links: [
      {
        id: 'code',
        url: 'https://github.com/AlanDiogoR/Controle-finaceiro/tree/a05ce48631f37accf88168a31a995b1e09de5b34',
      },
    ],
  },
  {
    id: 'ishop',
    stack: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Stitches'],
    image: '/images/projects/ishop.webp',
    links: [{ id: 'code', url: 'https://github.com/AlanDiogoR/IShop' }],
  },
];

export const moreProjects: readonly ProjectMeta[] = [
  {
    id: 'coffee-delivery',
    stack: ['React', 'TypeScript', 'Vite', 'styled-components'],
    image: '/images/projects/coffee-delivery.webp',
    links: [
      {
        id: 'code',
        url: 'https://github.com/AlanDiogoR/Rocketseat-challenge/tree/main/Coffe%20Delivery',
      },
    ],
  },
  {
    id: 'todo-list',
    stack: ['React', 'TypeScript', 'Vite', 'Sass'],
    image: '/images/projects/todo-list.webp',
    links: [
      {
        id: 'code',
        url: 'https://github.com/AlanDiogoR/Rocketseat-challenge/tree/main/todo%20list',
      },
    ],
  },
  {
    id: 'pomodoro',
    stack: ['React', 'TypeScript', 'Vite', 'styled-components', 'Zod'],
    image: '/images/projects/ignite-time.webp',
    links: [
      {
        id: 'code',
        url: 'https://github.com/AlanDiogoR/Ignite-Ts-02/tree/main/Ignite-time',
      },
    ],
  },
  {
    id: 'utf-projetos',
    stack: ['C', 'Java', 'HTML', 'CSS', 'JavaScript', 'OpenMP'],
    links: [
      { id: 'live', url: 'https://alandiogor.github.io/UTF-Projetos/' },
      { id: 'code', url: 'https://github.com/AlanDiogoR/UTF-Projetos' },
    ],
  },
  {
    id: 'spring-user',
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2', 'Maven'],
    links: [{ id: 'code', url: 'https://github.com/AlanDiogoR/Spring-User' }],
  },
  {
    id: 'backend-receitas',
    stack: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'Multer'],
    links: [{ id: 'code', url: 'https://github.com/AlanDiogoR/backend-receitas' }],
  },
  {
    id: 'icall',
    stack: ['TypeScript', 'React', 'ESLint'],
    links: [{ id: 'code', url: 'https://github.com/AlanDiogoR/ICall' }],
  },
  {
    id: 'api-nodejs',
    stack: ['Node.js', 'Express', 'TypeScript', 'React', 'Vite', 'Socket.IO'],
    links: [{ id: 'code', url: 'https://github.com/AlanDiogoR/API-nodejs' }],
  },
  {
    id: 'nodejs-curso',
    stack: ['Node.js', 'Express', 'JavaScript'],
    links: [{ id: 'code', url: 'https://github.com/AlanDiogoR/nodejs' }],
  },
  {
    id: 'exercicios-pdf',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [{ id: 'code', url: 'https://github.com/AlanDiogoR/Exercicios-pdf' }],
  },
  {
    id: 'portfolio',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    links: [
      { id: 'live', url: 'https://alandiogo.vercel.app' },
      { id: 'code', url: 'https://github.com/AlanDiogoR/Profile' },
    ],
  },
];
