export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  kind: string;
  description: string;
  highlights: string[];
  stack: string[];
  /** Observação honesta sobre o estado do projeto (ex.: API fora do ar). */
  note?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: 'cover' | 'contain';
  links: ProjectLink[];
}

/**
 * Somente repositórios públicos de AlanDiogoR. Link de deploy só entra se respondia 200 na revisão (14/10/2026).
 */
export const projects: Project[] = [
  {
    id: 'mood-sharing',
    title: 'Mood Sharing',
    kind: 'API REST + app mobile',
    description: 'App para casais compartilharem humor, notas, fotos e metas, com back-end próprio.',
    highlights: [
      'API em Node.js, Express e TypeScript com MongoDB, organizada em módulos',
      'JWT com access e refresh token (rotação e revogação), bcrypt e validação de entrada',
      'Helmet, rate limiting e sanitização contra NoSQL injection',
      'App React Native (Expo) com geolocalização, push e biometria',
    ],
    stack: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'JWT', 'React Native', 'Expo', 'Jest'],
    image: '/images/projects/mood-sharing.webp',
    imageAlt: 'Tela do app Mood Sharing mostrando o estado atual do usuário e o do parceiro',
    imageFit: 'contain',
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/Mood-Sharing' }],
  },
  {
    id: 'grivy',
    title: 'Grivy',
    kind: 'Controle financeiro pessoal · Desafio Astrocode',
    description: 'Controle de contas, transações, cartões e metas de economia.',
    highlights: [
      'API REST em camadas com Spring Security + JWT, JPA e migrações Flyway',
      'Documentação OpenAPI/Swagger e rate limiting de login',
      'Front-end em Nuxt/Vue 3 com Pinia e TanStack Query',
      'Testes com JUnit e Vitest, Docker e CI no GitHub Actions',
    ],
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Nuxt', 'Vue 3', 'TypeScript', 'Docker'],
    note: 'O front está publicado; a API está temporariamente fora do ar, então login e dados podem não funcionar.',
    image: '/images/projects/grivy.webp',
    imageAlt: 'Página inicial do Grivy com a frase "Chega de não saber para onde vai o seu dinheiro"',
    links: [
      { label: 'Ver site', url: 'https://grivy.netlify.app' },
      { label: 'Código', url: 'https://github.com/AlanDiogoR/Desafio-Astrocode' },
    ],
  },
  {
    id: 'verdan',
    title: 'Verdan',
    kind: 'E-commerce full stack · TCC do curso técnico',
    description: 'Loja virtual de brinquedos com API própria e painel administrativo desktop.',
    highlights: [
      'API REST com CRUD de produtos, categorias e pedidos',
      'Login com JWT e bcrypt',
      'Painel administrativo em Electron',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Electron'],
    image: '/images/projects/verdan.webp',
    imageAlt: 'Página inicial da loja Verdan com banner "Brinquedos para todas as crianças"',
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/TCC' }],
  },
  {
    id: 'codeleap',
    title: 'CodeLeap Network',
    kind: 'Rede social · Teste técnico',
    description: 'CRUD de posts com curtidas, comentários e menções, atualizado em tempo real.',
    highlights: [
      'Edição e exclusão restritas ao autor, infinite scroll com paginação por cursor',
      'Repository Pattern (API REST ou Firestore) e estado global com Redux Toolkit',
      'Validação com Zod, proteção contra XSS (DOMPurify) e testes com Vitest',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'Firebase', 'Tailwind CSS', 'Vitest'],
    image: '/images/projects/codeleap.webp',
    imageAlt: 'Tela da CodeLeap Network com o formulário "What\'s on your mind?" e o feed de posts',
    links: [
      { label: 'Ver site', url: 'https://code-leap-test-tau.vercel.app' },
      { label: 'Código', url: 'https://github.com/AlanDiogoR/CodeLeap-test' },
    ],
  },
  {
    id: 'ishop',
    title: 'IShop',
    kind: 'Loja virtual com Stripe',
    description: 'Catálogo de camisetas vindo da API do Stripe, com checkout por API Route.',
    highlights: [
      'Páginas estáticas com SSG/ISR e rotas dinâmicas',
      'API Route que cria a sessão de pagamento no Stripe',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Stitches'],
    image: '/images/projects/ishop.webp',
    imageAlt: 'Vitrine do IShop com camisetas em um carrossel',
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/IShop' }],
  },
];
