import { sectionIds } from './sections';
import type { Dictionary } from './types';

export const pt = {
  locale: 'pt',
  htmlLang: 'pt-BR',
  ogLocale: 'pt_BR',
  path: '/pt',
  role: 'Desenvolvedor Full Stack Júnior',
  skipToContent: 'Pular para o conteúdo',
  seo: {
    title: 'Alan Diogo | Desenvolvedor Full Stack Júnior — Portfólio',
    description:
      'Desenvolvedor full stack júnior no Brasil (UTC-3), aberto a vagas remotas. TypeScript, React, Next.js, Node.js, Java/Spring, Angular e React Native.',
    ogImageAlt:
      'Card escuro com o nome de Alan Diogo, a função de desenvolvedor full stack júnior, a UTFPR e uma lista curta de tecnologias.',
  },
  education: {
    school: 'Universidade Tecnológica Federal do Paraná',
  },
  sections: {
    home: sectionIds.home.pt,
    projects: sectionIds.projects.pt,
    about: sectionIds.about.pt,
    stack: sectionIds.stack.pt,
    contact: sectionIds.contact.pt,
    content: sectionIds.content.pt,
  },
  header: {
    mainNav: 'Principal',
    mobileNav: 'Principal (mobile)',
    contact: 'Falar comigo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    toggleTheme: 'Alternar tema',
    themeToLight: 'Ativar tema claro',
    themeToDark: 'Ativar tema escuro',
    languages: 'Idiomas',
  },
  hero: {
    imageAlt: 'Retrato de Alan Diogo, de camisa preta, sobre fundo claro',
    lede: 'Desenvolvedor full stack júnior no Brasil (UTC-3), aberto a vagas remotas. Construo APIs REST, front-ends tipados e apps mobile, do banco ao deploy.',
    viewProjects: 'Ver projetos',
    contact: 'Falar comigo',
  },
  projectsSection: {
    eyebrow: 'Projetos',
    title: 'Projetos com código público',
    intro: 'Repositórios públicos de programação. O trabalho mais forte fica na frente; exercícios de curso ficam recolhidos abaixo. Onde existe site publicado, o link está no card.',
    problem: 'Problema',
    solution: 'Solução',
    stack: 'Stack',
    moreSummary: (count) => `Mais no GitHub (${count})`,
    moreIntro: 'Exercícios de curso e repositórios menores.',
    techOf: (title) => `Tecnologias de ${title}`,
    externalLink: (title) => ` de ${title} (abre em nova aba)`,
    imageFallback: (title) => `Captura de tela do projeto ${title}`,
    linkLabel: { live: 'Ver site', video: 'Vídeo', code: 'Código' },
  },
  about: {
    eyebrow: 'Sobre',
    body: 'Estudante de Engenharia de Software na UTFPR (2025 – previsão jan/2029) e desenvolvedor de software na Astrocode, em contrato PJ, desde outubro de 2026. Trabalho com Java, Spring Boot, Angular e PL/SQL, e reviso e testo o código gerado com o Claude antes da entrega. Técnico em Informática e Desenvolvimento de Sistemas (2021–2023). Inglês intermediário-avançado (B2): leio documentação, reviso código e escrevo em inglês.',
  },
  timeline: {
    labels: { work: 'Experiência', education: 'Formação', project: 'Projeto' },
    externalLink: ' (código no GitHub, abre em nova aba)',
    items: {
      astrocode: {
        year: 'out/2026 – atual',
        title: 'Astrocode — Desenvolvedor de Software (contrato PJ)',
        description:
          'Contrato PJ. Java, Spring Boot, Angular e PL/SQL. Reviso e testo código gerado por IA (Claude) antes da entrega.',
      },
      utfpr: {
        year: '2025 – previsão jan/2029',
        title: 'Bacharelado em Engenharia de Software, UTFPR Cornélio Procópio',
        description: 'Exercícios e projetos da graduação no UTF-Projetos.',
      },
      grivy: {
        year: '2026',
        title: 'Grivy',
        description: 'Controle financeiro: Spring Boot (Java 21) e PostgreSQL no back, Nuxt/Vue no front.',
      },
      verdan: {
        year: '2022',
        title: 'Verdan, e-commerce full stack',
        description: 'Trabalho de conclusão do curso técnico: loja, API REST e painel em Electron.',
      },
      etec: {
        year: '2021–2023',
        title: 'Técnico em Informática e Desenvolvimento de Sistemas',
        description: 'Etec Terezinha Monteiro dos Santos. Base em programação, banco de dados e web.',
      },
    },
  },
  skillsSection: {
    eyebrow: 'Stack',
    title: 'Tecnologias que eu realmente uso',
    intro: 'Levantado dos meus repositórios públicos. Angular e PL/SQL vêm do meu trabalho atual na Astrocode, não de um repositório público.',
    seenIn: 'Visto em:',
    techOf: (title) => `Tecnologias de ${title}`,
    groups: {
      front: {
        title: 'Front-end',
        description: 'Interfaces responsivas, acessíveis e tipadas.',
        evidence: 'Grivy, CodeLeap Network, Verdan e IShop. Angular: Astrocode (trabalho atual).',
      },
      back: {
        title: 'Back-end',
        description: 'APIs REST com autenticação, validação e camadas bem separadas.',
        evidence: 'Mood Sharing, Grivy, Verdan e Astrocode (trabalho atual).',
      },
      dados: {
        title: 'Banco de dados',
        description: 'Modelagem, migrações e persistência relacional e NoSQL.',
        evidence: 'Grivy, Mood Sharing e CodeLeap Network. PL/SQL: Astrocode (trabalho atual).',
      },
      mobile: {
        title: 'Mobile',
        description: 'App multiplataforma consumindo API própria.',
        evidence: 'Mood Sharing.',
      },
      qualidade: {
        title: 'Qualidade e entrega',
        description: 'Testes automatizados, containers e deploy.',
        evidence: 'Grivy, CodeLeap Network e Mood Sharing.',
      },
      base: {
        title: 'Fundamentos',
        description: 'Base da graduação: algoritmos, estruturas de dados, POO e paralelismo.',
        evidence: 'UTF-Projetos.',
      },
    },
  },
  contactSection: {
    eyebrow: 'Contato',
    title: 'Falar comigo',
    body: 'Me mande um e-mail, fale pelo LinkedIn ou baixe o currículo. O código está no GitHub.',
    cv: 'Baixar currículo (PDF)',
    newTab: ' (abre em nova aba)',
  },
  footer: {
    rights: (year) => `© ${year} Alan Diogo. Todos os direitos reservados.`,
    nav: 'Contato e código',
    source: 'Código deste site',
    linkedinSr: ' de Alan Diogo (abre em nova aba)',
    sourceSr: ' (abre em nova aba)',
  },
  projects: {
    grivy: {
      kind: 'Controle financeiro pessoal · Desafio Astrocode',
      description:
        'Controle de contas, transações, cartões de crédito e metas de economia, com front publicado e API REST própria.',
      highlights: [
        'API em Java 21 e Spring Boot 4, com Spring Security, JWT, JPA e migrações Flyway',
        'Front em Nuxt 4 e Vue 3, com Vuetify, Pinia e TanStack Query',
        'Testes com JUnit e Vitest, Docker e CI no GitHub Actions',
      ],
      note: 'O front está publicado. A API está fora do ar, então login e o painel podem não funcionar.',
      imageAlt: 'Página inicial do Grivy com a frase Chega de não saber para onde vai o seu dinheiro',
    },
    'mood-sharing': {
      kind: 'App mobile + API REST',
      description:
        'Aplicativo para casais compartilharem o humor em tempo real. O estado do parceiro aparece no app e num widget Android, e muda para "feliz" quando os dois estão a menos de 1 km.',
      highlights: [
        'API em Node.js, Express e TypeScript com MongoDB, módulos de humor, notas, fotos, encontros e mídia',
        'JWT com access e refresh token, bcrypt, Helmet, rate limit e sanitização contra NoSQL injection',
        'App em React Native e Expo com biometria, push, geolocalização e widget Android em Kotlin',
      ],
      note: 'Não há site publicado. A imagem é a tela de entrada do app, aberta no modo web do Expo.',
      imageAlt: 'Tela de entrada do app Mood Sharing, com e-mail, senha e o botão Entrar',
    },
    codeleap: {
      kind: 'Rede social · teste técnico',
      description: 'Rede para criar, editar e apagar posts, com curtidas, comentários e menções.',
      highlights: [
        'Login com usuário ou Google, e edição restrita ao autor do post',
        'Repository Pattern para API REST ou Firestore, com tempo real e infinite scroll',
        'Validação com Zod, Redux Toolkit e testes com Vitest',
      ],
      note: 'O site publicado pede login com Google. A captura é a tela de novo post: a API pública de posts respondeu 503, então o feed não entra na imagem.',
      imageAlt: "Tela da CodeLeap Network com o cabeçalho e o formulário What's on your mind?",
    },
    verdan: {
      kind: 'E-commerce · TCC do curso técnico',
      description:
        'Loja virtual feita como trabalho de conclusão do curso técnico, com API própria e um painel desktop para cadastrar produtos.',
      highlights: [
        'Loja em Next.js 13, React e TypeScript, com Stitches, React Query, React Hook Form e Zod',
        'API em Node.js, Express, MongoDB, JWT, bcrypt e upload de imagens',
        'Cadastro de produtos num app desktop em Electron',
      ],
      note: 'Não há deploy público. A captura é a página inicial rodando localmente. A grade de produtos depende da API, que não está publicada.',
      imageAlt: 'Página inicial da loja Verdan com o banner Brinquedos para todas as crianças',
    },
    'controle-financeiro': {
      kind: 'Finanças pessoais',
      description:
        'Registro de entradas e saídas, resumo do saldo e busca de transações. A interface consome uma API local feita com json-server.',
      highlights: [
        'Cards de entradas, saídas e total calculados no cliente',
        'Modal de nova transação com React Hook Form, Zod e Radix',
        'Lista da mais recente para a mais antiga e busca por texto',
      ],
      note: 'Não há deploy público. A versão concluída está no commit a05ce48; a branch main não tem o app executável. A captura usa os dados de exemplo do repositório.',
      imageAlt: 'Painel do Controle Financeiro com entradas, saídas, total e a lista de transações',
    },
    ishop: {
      kind: 'Loja virtual com Stripe',
      description:
        'Vitrine de camisetas carregada do Stripe no build, com página de produto e checkout criado numa API Route.',
      highlights: [
        'Home e produto com SSG/ISR e rotas dinâmicas',
        'API Route que abre a sessão de pagamento no Stripe Checkout',
        'Carrossel com Keen Slider e estilo com Stitches',
      ],
      note: 'Não há deploy público. Sem a chave do Stripe, a loja mostra o catálogo de demonstração do repositório: itens de exemplo, que não estão à venda.',
      imageAlt: 'Vitrine local do IShop com o aviso de catálogo de demonstração e camisetas de exemplo',
    },
    'coffee-delivery': {
      kind: 'E-commerce de cafés · Ignite',
      description:
        'Loja de cafés do desafio Ignite. A home traz o catálogo e o carrinho reúne o pedido para a confirmação.',
      highlights: [
        'Home com o hero, a localização Porto Alegre e a seção Nossos cafés',
        'Carrinho com o item, a quantidade, o total e a confirmação do pedido',
        'Tema global em styled-components',
      ],
      imageAlt:
        'Home do Coffee Delivery com o catálogo de cafés ao lado do carrinho, com o Expresso Tradicional e o total do pedido',
    },
    'todo-list': {
      kind: 'Lista de tarefas · Ignite',
      description:
        'Lista para anotar o que falta fazer: criar a tarefa, marcar como concluída e apagar. Os dados ficam na memória e somem ao recarregar.',
      highlights: [
        'O botão Criar fica desabilitado enquanto o campo está vazio',
        'Contadores de tarefas criadas e concluídas',
        'Estado vazio quando ainda não há tarefas',
      ],
      imageAlt: 'Tela da Todo List com quatro tarefas criadas e duas concluídas, contadores em 4 e 2',
    },
    pomodoro: {
      kind: 'Ignite Time',
      description:
        'Timer pomodoro: a pessoa escreve a tarefa e quantos minutos vai trabalhar, inicia o ciclo e consulta o histórico no navegador.',
      highlights: [
        'Formulário com React Hook Form e Zod na rota /',
        'Cronômetro e botão Começar',
        'Histórico dos ciclos na rota /history, guardado no localStorage',
      ],
      imageAlt:
        'Tela do Ignite Time com o logo, os ícones de timer e histórico, a tarefa, o cronômetro zerado e o botão Começar',
    },
    'utf-projetos': {
      kind: 'Graduação · Engenharia de Software, UTFPR',
      description:
        'Trabalhos da graduação por disciplina, de exercícios em C até um site publicado e experimentos de concorrência.',
      highlights: [
        'C em algoritmos e estruturas de dados, Java em programação orientada a objetos',
        'Site Horizon Studio em Dev-Web-Suf, publicado no GitHub Pages',
        'Experimentos com OpenMP, Intel TBB e semáforos',
      ],
      note: 'Parte dos arquivos são exercícios de aula. Alguns não compilam sozinhos.',
    },
    'spring-user': {
      kind: 'CRUD de usuários',
      description:
        'Primeiro contato com Java: CRUD de usuários com a regra de negócio separada do acesso ao banco.',
      highlights: [
        'Rotas REST em /usuario para criar, buscar por e-mail, atualizar e apagar',
        'Camadas controller, business, repository e entidade Usuario',
        'Banco H2 em memória, com console em /h2-console',
      ],
    },
    'backend-receitas': {
      kind: 'API de receitas',
      description: 'API de receitas com usuários, categorias, curtidas e upload de imagem.',
      highlights: [
        'Modelos Mongoose de receita, categoria, usuário e curtida',
        'Casos de uso para criar, listar e apagar receitas, categorias e usuários',
        'Upload de imagem com Multer',
      ],
    },
    icall: {
      kind: 'Design system',
      description: 'Monorepo de design system, com pacotes separados para tokens, React, ESLint e TypeScript.',
      highlights: [
        'Workspaces em packages/tokens, packages/react, packages/eslint-config e packages/ts-config',
      ],
    },
    'api-nodejs': {
      kind: 'Estudo de API e front',
      description:
        'Projeto de estudo com uma API em Node.js e um front em React. A descrição do repositório é "Apenas aprendizado".',
      highlights: [
        'API Express com Mongoose, Sequelize, MySQL, SQLite e Socket.IO',
        'Front em React, Vite, Axios, styled-components e Socket.IO client',
      ],
    },
    'nodejs-curso': {
      kind: 'Exercícios do curso',
      description: 'Exercícios e desafios de um curso de Node.js. A API sobe um servidor Express na porta 3333.',
      highlights: [
        'Cadastro de conta em memória, com id gerado por uuid',
        'Resposta 400 quando a conta já existe',
      ],
    },
    'exercicios-pdf': {
      kind: 'Lógica de programação · UTFPR',
      description:
        'Listas de lógica de programação da UTFPR, organizadas por decisão, repetição e sequência, com páginas em HTML.',
      highlights: [
        'Condicionais, laços e sequências',
        'Páginas em HTML, CSS e JavaScript ao lado dos PDFs',
      ],
    },
    portfolio: {
      kind: 'Este site',
      description:
        'Página pessoal em Next.js para mostrar projetos, stack e currículo, em inglês e português, com tema claro e escuro.',
      highlights: [
        'Pages Router, páginas estáticas e TypeScript strict',
        'Inglês em / e português do Brasil em /pt, sem redirecionamento automático',
        'Tailwind com tokens de cor e next/image',
      ],
    },
  },
} satisfies Dictionary;
