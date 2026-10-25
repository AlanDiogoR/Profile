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
 * Repositórios públicos de programação de AlanDiogoR.
 * Fora: Lúcio, Bike Center, Kabeção/Cabeção, Prumo, o repositório especial
 * do perfil do GitHub e forks (github-readme-stats, streak-stats, SECOMP).
 * Link de site só entra se a URL existe. Capturas são do Playwright.
 */
export const projects: Project[] = [
  {
    id: 'mood-sharing',
    title: 'Mood Sharing',
    kind: 'App mobile + API REST',
    description:
      'Aplicativo para casais compartilharem o humor em tempo real. O estado do parceiro aparece no app e num widget Android, e muda para "feliz" quando os dois estão a menos de 1 km.',
    highlights: [
      'API em Node.js, Express e TypeScript com MongoDB, módulos de humor, notas, fotos, encontros e mídia',
      'JWT com access e refresh token, bcrypt, Helmet, rate limit e sanitização contra NoSQL injection',
      'App em React Native e Expo com biometria, push, geolocalização e widget Android em Kotlin',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    note: 'Não há site publicado. A imagem é a tela de entrada do app, aberta no modo web do Expo.',
    image: '/images/projects/mood-sharing.webp',
    imageAlt: 'Tela de entrada do app Mood Sharing, com e-mail, senha e o botão Entrar',
    imageFit: 'contain',
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/Mood-Sharing' }],
  },
  {
    id: 'grivy',
    title: 'Grivy',
    kind: 'Controle financeiro pessoal · Desafio Astrocode',
    description:
      'Controle de contas, transações, cartões de crédito e metas de economia, com front publicado e API REST própria.',
    highlights: [
      'API em Java 21 e Spring Boot 4, com Spring Security, JWT, JPA e migrações Flyway',
      'Front em Nuxt 4 e Vue 3, com Vuetify, Pinia e TanStack Query',
      'Testes com JUnit e Vitest, Docker e CI no GitHub Actions',
    ],
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Nuxt', 'Vue 3', 'TypeScript', 'Vuetify'],
    note: 'O front está publicado. A API está fora do ar, então login e o painel podem não funcionar.',
    image: '/images/projects/grivy.webp',
    imageAlt: 'Página inicial do Grivy com a frase Chega de não saber para onde vai o seu dinheiro',
    links: [
      { label: 'Ver site', url: 'https://grivy.netlify.app' },
      { label: 'Vídeo', url: 'https://youtu.be/ZRDuhOfDv9A' },
      { label: 'Código', url: 'https://github.com/AlanDiogoR/Desafio-Astrocode' },
    ],
  },
  {
    id: 'codeleap',
    title: 'CodeLeap Network',
    kind: 'Rede social · teste técnico',
    description: 'Rede para criar, editar e apagar posts, com curtidas, comentários e menções.',
    highlights: [
      'Login com usuário ou Google, e edição restrita ao autor do post',
      'Repository Pattern para API REST ou Firestore, com tempo real e infinite scroll',
      'Validação com Zod, Redux Toolkit e testes com Vitest',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Redux Toolkit', 'Firebase', 'Tailwind CSS', 'Vitest'],
    note: 'O site publicado pede login com Google. A captura é a tela de novo post: a API pública de posts respondeu 503, então o feed não entra na imagem.',
    image: '/images/projects/codeleap.webp',
    imageAlt: "Tela da CodeLeap Network com o cabeçalho e o formulário What's on your mind?",
    links: [
      { label: 'Ver site', url: 'https://code-leap-test-tau.vercel.app' },
      { label: 'Código', url: 'https://github.com/AlanDiogoR/CodeLeap-test' },
    ],
  },
  {
    id: 'verdan',
    title: 'Verdan',
    kind: 'E-commerce · TCC do curso técnico',
    description:
      'Loja virtual feita como trabalho de conclusão do curso técnico, com API própria e um painel desktop para cadastrar produtos.',
    highlights: [
      'Loja em Next.js 13, React e TypeScript, com Stitches, React Query, React Hook Form e Zod',
      'API em Node.js, Express, MongoDB, JWT, bcrypt e upload de imagens',
      'Cadastro de produtos num app desktop em Electron',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Electron'],
    note: 'Não há deploy público. A captura é a página inicial rodando localmente. A grade de produtos depende da API, que não está publicada.',
    image: '/images/projects/verdan.webp',
    imageAlt: 'Página inicial da loja Verdan com o banner Brinquedos para todas as crianças',
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/TCC' }],
  },
  {
    id: 'controle-financeiro',
    title: 'Controle Financeiro',
    kind: 'Finanças pessoais',
    description:
      'Registro de entradas e saídas, resumo do saldo e busca de transações. A interface consome uma API local feita com json-server.',
    highlights: [
      'Cards de entradas, saídas e total calculados no cliente',
      'Modal de nova transação com React Hook Form, Zod e Radix',
      'Lista da mais recente para a mais antiga e busca por texto',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'styled-components', 'Zod', 'Radix UI'],
    note: 'Não há deploy público. A versão concluída está no commit a05ce48; a branch main não tem o app executável. A captura usa os dados de exemplo do repositório.',
    image: '/images/projects/controle-financeiro.webp',
    imageAlt: 'Painel do Controle Financeiro com entradas, saídas, total e a lista de transações',
    links: [
      {
        label: 'Código',
        url: 'https://github.com/AlanDiogoR/Controle-finaceiro/tree/a05ce48631f37accf88168a31a995b1e09de5b34',
      },
    ],
  },
  {
    id: 'ishop',
    title: 'IShop',
    kind: 'Loja virtual com Stripe',
    description:
      'Vitrine de camisetas carregada do Stripe no build, com página de produto e checkout criado numa API Route.',
    highlights: [
      'Home e produto com SSG/ISR e rotas dinâmicas',
      'API Route que abre a sessão de pagamento no Stripe Checkout',
      'Carrossel com Keen Slider e estilo com Stitches',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Stitches'],
    note: 'Não há deploy público. Sem a chave do Stripe, a loja mostra o catálogo de demonstração do repositório: itens de exemplo, que não estão à venda.',
    image: '/images/projects/ishop.webp',
    imageAlt: 'Vitrine local do IShop com o aviso de catálogo de demonstração e camisetas de exemplo',
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/IShop' }],
  },
  {
    id: 'todo-list',
    title: 'Todo List',
    kind: 'Lista de tarefas · Ignite',
    description:
      'Lista para anotar o que falta fazer: criar a tarefa, marcar como concluída e apagar. Os dados ficam na memória e somem ao recarregar.',
    highlights: [
      'O botão Criar fica desabilitado enquanto o campo está vazio',
      'Contadores de tarefas criadas e concluídas',
      'Estado vazio quando ainda não há tarefas',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Sass'],
    image: '/images/projects/todo-list.webp',
    imageAlt:
      'Tela da Todo List com quatro tarefas criadas e duas concluídas, contadores em 4 e 2',
    links: [
      {
        label: 'Código',
        url: 'https://github.com/AlanDiogoR/Rocketseat-challenge/tree/main/todo%20list',
      },
    ],
  },
  {
    id: 'coffee-delivery',
    title: 'Coffee Delivery',
    kind: 'E-commerce de cafés · Ignite',
    description:
      'Loja de cafés do desafio Ignite. A home traz o catálogo e o carrinho reúne o pedido para a confirmação.',
    highlights: [
      'Home com o hero, a localização Porto Alegre e a seção Nossos cafés',
      'Carrinho com o item, a quantidade, o total e a confirmação do pedido',
      'Tema global em styled-components',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'styled-components'],
    image: '/images/projects/coffee-delivery.webp',
    imageAlt:
      'Home do Coffee Delivery com o catálogo de cafés ao lado do carrinho, com o Expresso Tradicional e o total do pedido',
    links: [
      {
        label: 'Código',
        url: 'https://github.com/AlanDiogoR/Rocketseat-challenge/tree/main/Coffe%20Delivery',
      },
    ],
  },
  {
    id: 'pomodoro',
    title: 'Pomodoro',
    kind: 'Ignite Time',
    description:
      'Timer pomodoro: a pessoa escreve a tarefa e quantos minutos vai trabalhar, inicia o ciclo e consulta o histórico no navegador.',
    highlights: [
      'Formulário com React Hook Form e Zod na rota /',
      'Cronômetro e botão Começar',
      'Histórico dos ciclos na rota /history, guardado no localStorage',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'styled-components', 'Zod'],
    image: '/images/projects/ignite-time.webp',
    imageAlt:
      'Tela do Ignite Time com o logo, os ícones de timer e histórico, a tarefa, o cronômetro zerado e o botão Começar',
    links: [
      {
        label: 'Código',
        url: 'https://github.com/AlanDiogoR/Ignite-Ts-02/tree/main/Ignite-time',
      },
    ],
  },
  {
    id: 'utf-projetos',
    title: 'UTF-Projetos',
    kind: 'Graduação · Engenharia de Software, UTFPR',
    description:
      'Trabalhos da graduação por disciplina, de exercícios em C até um site publicado e experimentos de concorrência.',
    highlights: [
      'C em algoritmos e estruturas de dados, Java em programação orientada a objetos',
      'Site Horizon Studio em Dev-Web-Suf, publicado no GitHub Pages',
      'Experimentos com OpenMP, Intel TBB e semáforos',
    ],
    stack: ['C', 'Java', 'HTML', 'CSS', 'JavaScript', 'OpenMP'],
    note: 'Parte dos arquivos são exercícios de aula. Alguns não compilam sozinhos.',
    links: [
      { label: 'Ver site', url: 'https://alandiogor.github.io/UTF-Projetos/' },
      { label: 'Código', url: 'https://github.com/AlanDiogoR/UTF-Projetos' },
    ],
  },
  {
    id: 'spring-user',
    title: 'Spring User',
    kind: 'CRUD de usuários',
    description:
      'Primeiro contato com Java: CRUD de usuários com a regra de negócio separada do acesso ao banco.',
    highlights: [
      'Rotas REST em /usuario para criar, buscar por e-mail, atualizar e apagar',
      'Camadas controller, business, repository e entidade Usuario',
      'Banco H2 em memória, com console em /h2-console',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2', 'Maven'],
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/Spring-User' }],
  },
  {
    id: 'icall',
    title: 'ICall',
    kind: 'Design system',
    description: 'Monorepo de design system, com pacotes separados para tokens, React, ESLint e TypeScript.',
    highlights: [
      'Workspaces em packages/tokens, packages/react, packages/eslint-config e packages/ts-config',
    ],
    stack: ['TypeScript', 'React', 'ESLint'],
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/ICall' }],
  },
  {
    id: 'backend-receitas',
    title: 'Backend Receitas',
    kind: 'API de receitas',
    description: 'API de receitas com usuários, categorias, curtidas e upload de imagem.',
    highlights: [
      'Modelos Mongoose de receita, categoria, usuário e curtida',
      'Casos de uso para criar, listar e apagar receitas, categorias e usuários',
      'Upload de imagem com Multer',
    ],
    stack: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Mongoose', 'Multer'],
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/backend-receitas' }],
  },
  {
    id: 'api-nodejs',
    title: 'API Node.js',
    kind: 'Estudo de API e front',
    description: 'Projeto de estudo com uma API em Node.js e um front em React. A descrição do repositório é "Apenas aprendizado".',
    highlights: [
      'API Express com Mongoose, Sequelize, MySQL, SQLite e Socket.IO',
      'Front em React, Vite, Axios, styled-components e Socket.IO client',
    ],
    stack: ['Node.js', 'Express', 'TypeScript', 'React', 'Vite', 'Socket.IO'],
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/API-nodejs' }],
  },
  {
    id: 'nodejs-curso',
    title: 'Node.js',
    kind: 'Exercícios do curso',
    description: 'Exercícios e desafios de um curso de Node.js. A API sobe um servidor Express na porta 3333.',
    highlights: [
      'Cadastro de conta em memória, com id gerado por uuid',
      'Resposta 400 quando a conta já existe',
    ],
    stack: ['Node.js', 'Express', 'JavaScript'],
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/nodejs' }],
  },
  {
    id: 'exercicios-pdf',
    title: 'Exercícios PDF',
    kind: 'Lógica de programação · UTFPR',
    description:
      'Listas de lógica de programação da UTFPR, organizadas por decisão, repetição e sequência, com páginas em HTML.',
    highlights: [
      'Condicionais, laços e sequências',
      'Páginas em HTML, CSS e JavaScript ao lado dos PDFs',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'Código', url: 'https://github.com/AlanDiogoR/Exercicios-pdf' }],
  },
  {
    id: 'portfolio',
    title: 'Portfólio',
    kind: 'Este site',
    description:
      'Página pessoal em Next.js para mostrar projetos, stack e currículo, com tema claro e escuro.',
    highlights: [
      'Pages Router, páginas estáticas e TypeScript strict',
      'Tailwind com tokens de cor e next/image',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    links: [
      { label: 'Ver site', url: 'https://alandiogo.vercel.app' },
      { label: 'Código', url: 'https://github.com/AlanDiogoR/Profile' },
    ],
  },
];
