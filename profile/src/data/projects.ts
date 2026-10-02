export interface Project {
  id: string;
  title: string;
  kind: string;
  description: string;
  stack: string[];
  /** Imagem opcional (screenshot do site público). */
  image?: string;
  imageAlt?: string;
  links: { label: string; url: string }[];
}

/** Somente links públicos. Não incluir repositórios privados nem URLs de checkout. */
export const projects: Project[] = [
  {
    id: 'bike-center',
    title: 'Bike Center',
    kind: 'E-commerce e site de loja local · Fartura/SP',
    description:
      'Plataforma para loja de bicicletas e motos: API REST, loja web e app mobile em monorepo, com pedido de orçamento direto no WhatsApp.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'MongoDB', 'Expo', 'Docker'],
    image: '/images/projects/bike.webp',
    imageAlt: 'Página inicial do site Bike Center, com fotos de bicicletas na loja e botões de WhatsApp',
    links: [
      { label: 'Ver site', url: 'https://bike-center-web.vercel.app' },
      { label: 'Código', url: 'https://github.com/AlanDiogoR/bike-center' },
    ],
  },
  {
    id: 'grivy',
    title: 'Grivy',
    kind: 'Controle financeiro pessoal',
    description:
      'App de finanças pessoais com contas, transações, categorias e metas de economia. Autenticação com JWT e arquitetura limpa no back-end.',
    stack: ['Vue 3', 'Nuxt', 'Vuetify', 'Java 21', 'Spring Boot', 'PostgreSQL'],
    image: '/images/projects/grivy.webp',
    imageAlt: 'Página inicial do Grivy com a frase "Chega de não saber para onde vai o seu dinheiro" e um painel de contas',
    links: [
      { label: 'Ver site', url: 'https://grivy.netlify.app' },
      { label: 'Código', url: 'https://github.com/AlanDiogoR/Desafio-Astrocode' },
    ],
  },
  {
    id: 'kabecao',
    title: 'Kabeção Veículos',
    kind: 'Linktree para revenda · Fartura/SP',
    description:
      'Landing page estilo Linktree focada em levar o cliente ao WhatsApp, com SEO local e testes automatizados.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vitest'],
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/kabecao-veiculos' }],
  },
  {
    id: 'secomp',
    title: 'Desafio SECOMP CyberSec',
    kind: 'Segurança de aplicações · Educacional',
    description:
      'Laboratório de AppSec para a palestra de CyberSec da SECOMP: um banco propositalmente vulnerável em três linguagens, para praticar exploração (CTF) e correção de falhas web. Uso apenas em localhost.',
    stack: ['Java', 'Python', 'C#', 'SQLite', 'AppSec'],
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/Desafi-SECOMP_2026_CyberSec' }],
  },
  {
    id: 'utf',
    title: 'UTF-Projetos',
    kind: 'Formação · UTFPR',
    description:
      'Exercícios, listas, diagramas e projetos práticos do curso de Engenharia de Software, organizados por disciplina e período.',
    stack: ['C', 'Algoritmos', 'Banco de dados'],
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/UTF-Projetos' }],
  },
];
