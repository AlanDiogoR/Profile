import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Grivy',
    description:
      'Sistema de controle financeiro pessoal em produção. Gestão de contas bancárias, transações, categorias e metas de economia. Arquitetura limpa com JWT e BCrypt.',
    techStack: ['Vue 3', 'Nuxt 4', 'Spring Boot', 'PostgreSQL', 'Vuetify'],
    link: 'https://github.com/AlanDiogoR/Desafio-Astrocode',
    image: '/images/grivy/1.PNG',
    year: '2024',
    inProduction: true,
  },
  {
    id: '2',
    title: 'Mood-Sharing',
    description:
      'App React Native em produção para casais compartilharem estados emocionais em tempo real. Exibe humor do parceiro na tela de bloqueio, geolocalização e notificações push.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Expo'],
    link: 'https://github.com/AlanDiogoR/Mood-Sharing',
    image: '/images/moodsharing/1.jpeg',
    year: '2024',
    inProduction: true,
  },
  {
    id: '3',
    title: 'Verdan Shopping',
    description:
      'Plataforma e-commerce do TCC (Etec). Desenvolvimento focado em UX, backend, frontend e integrações.',
    techStack: ['Next.js', 'Node.js', 'TypeScript', 'SCSS'],
    link: 'https://github.com/AlanDiogoR/TCC',
    image: '/images/verdan/1.webp',
    year: '2023',
  },
  {
    id: '4',
    title: 'Coffee Delivery',
    description:
      'Desafio Ignite — aplicação de delivery de cafés com carrinho e checkout.',
    techStack: ['React', 'TypeScript', 'Styled Components'],
    link: 'https://github.com/AlanDiogoR/Rocketseat-challenge/tree/main/Coffe%20Delivery',
    image: '/images/coffe-delivery/1.PNG',
    year: '2023',
  },
  {
    id: '5',
    title: 'Ignite Timer',
    description:
      'Timer estilo Pomodoro para gestão de tarefas e ciclos de foco.',
    techStack: ['React', 'TypeScript', 'React Hook Form'],
    link: 'https://github.com/AlanDiogoR/Rocketseat-challenge',
    image: '/images/ignite-timer/1.PNG',
    year: '2023',
  },
  {
    id: '6',
    title: 'Todo List',
    description:
      'Lista de tarefas com gerenciamento de estado e persistência.',
    techStack: ['React', 'TypeScript'],
    link: 'https://github.com/AlanDiogoR/Rocketseat-challenge/tree/main/todo%20list',
    image: '/images/todolist/1.PNG',
    year: '2023',
  },
  {
    id: '7',
    title: 'iShop',
    description:
      'Projeto de e-commerce ou interface de loja.',
    techStack: ['React', 'Node.js', 'TypeScript'],
    link: 'https://github.com/AlanDiogoR/iShop',
    image: '/images/iShop/1.PNG',
    year: '2022',
  },
  {
    id: '8',
    title: 'ICall',
    description:
      'Aplicação de chamadas ou comunicação.',
    techStack: ['React', 'Node.js'],
    link: 'https://github.com/AlanDiogoR/ICall',
    image: '/images/ICall/1.PNG',
    year: '2022',
  },
];
