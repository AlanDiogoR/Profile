import { sectionIds } from './sections';
import type { Dictionary } from './types';

export const en = {
  locale: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  path: '/',
  role: 'Junior Full-Stack Developer',
  skipToContent: 'Skip to content',
  seo: {
    title: 'Alan Diogo | Junior Full-Stack Developer — Portfolio',
    description:
      'Junior full-stack developer in Brazil (UTC-3), open to remote roles. TypeScript, React, Next.js, Node.js, Java/Spring, Angular, and React Native.',
    ogImageAlt:
      'Dark card with Alan Diogo’s name, the junior full-stack role, UTFPR, and a short technology list.',
  },
  education: {
    school: 'Federal University of Technology – Paraná',
  },
  sections: {
    home: sectionIds.home.en,
    projects: sectionIds.projects.en,
    about: sectionIds.about.en,
    stack: sectionIds.stack.en,
    contact: sectionIds.contact.en,
    content: sectionIds.content.en,
  },
  header: {
    mainNav: 'Main',
    mobileNav: 'Main (mobile)',
    contact: 'Get in touch',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleTheme: 'Toggle theme',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    languages: 'Languages',
  },
  hero: {
    imageAlt: 'Portrait of Alan Diogo in a black shirt, on a light background',
    lede: 'Junior full-stack developer in Brazil (UTC-3), open to remote roles. I build REST APIs, typed front ends, and mobile apps, from the database to deployment.',
    viewProjects: 'View projects',
    contact: 'Get in touch',
  },
  projectsSection: {
    eyebrow: 'Projects',
    title: 'Projects with public code',
    intro: 'Public programming repositories. Strongest work first; course exercises are folded below. If a site is published, the link is on the card.',
    problem: 'Problem',
    solution: 'Solution',
    stack: 'Stack',
    moreSummary: (count) => `More on GitHub (${count})`,
    moreIntro: 'Course exercises and smaller repositories.',
    techOf: (title) => `Technologies in ${title}`,
    externalLink: (title) => ` for ${title} (opens in a new tab)`,
    imageFallback: (title) => `Screenshot of ${title}`,
    linkLabel: { live: 'Live site', video: 'Video', code: 'Code' },
  },
  about: {
    eyebrow: 'About',
    body: 'Software Engineering student at UTFPR (2025 – expected January 2029) and a software developer at Astrocode, working as an independent contractor since October 2026. I work with Java, Spring Boot, Angular, and PL/SQL, and I review and test code generated with Claude before it ships. I also hold a technical degree in IT and Systems Development (2021–2023). English: upper-intermediate (B2). I read documentation, review code, and write in English.',
  },
  timeline: {
    labels: { work: 'Experience', education: 'Education', project: 'Project' },
    externalLink: ' (code on GitHub, opens in a new tab)',
    items: {
      astrocode: {
        year: 'Oct 2026 – present',
        title: 'Astrocode — Software Developer (contract)',
        description:
          'Independent contractor. Java, Spring Boot, Angular, and PL/SQL. I review and test AI-generated code (Claude) before it ships.',
      },
      utfpr: {
        year: '2025 – expected Jan 2029',
        title: 'B.S. in Software Engineering, UTFPR Cornélio Procópio',
        description: 'Coursework and projects in the UTF-Projetos repository.',
      },
      grivy: {
        year: '2026',
        title: 'Grivy',
        description: 'Personal finance app: Spring Boot (Java 21) and PostgreSQL on the back end, Nuxt/Vue on the front end.',
      },
      verdan: {
        year: '2022',
        title: 'Verdan, full-stack e-commerce',
        description: 'Capstone for the technical course: store, REST API, and an Electron admin panel.',
      },
      etec: {
        year: '2021–2023',
        title: 'Technical degree in IT and Systems Development',
        description: 'Etec Terezinha Monteiro dos Santos. Foundations in programming, databases, and the web.',
      },
    },
  },
  skillsSection: {
    eyebrow: 'Stack',
    title: 'Technologies I actually use',
    intro: 'Taken from my public repositories. Angular and PL/SQL come from my current role at Astrocode, not from a public repo.',
    seenIn: 'Seen in:',
    techOf: (title) => `Technologies in ${title}`,
    groups: {
      front: {
        title: 'Front-end',
        description: 'Responsive, accessible, typed interfaces.',
        evidence: 'Grivy, CodeLeap Network, Verdan, and IShop. Angular: Astrocode (current role).',
      },
      back: {
        title: 'Back-end',
        description: 'REST APIs with authentication, validation, and clear layers.',
        evidence: 'Mood Sharing, Grivy, Verdan, and Astrocode (current role).',
      },
      dados: {
        title: 'Databases',
        description: 'Modeling, migrations, and both relational and NoSQL storage.',
        evidence: 'Grivy, Mood Sharing, and CodeLeap Network. PL/SQL: Astrocode (current role).',
      },
      mobile: {
        title: 'Mobile',
        description: 'A cross-platform app on top of my own API.',
        evidence: 'Mood Sharing.',
      },
      qualidade: {
        title: 'Quality and delivery',
        description: 'Automated tests, containers, and deploy.',
        evidence: 'Grivy, CodeLeap Network, and Mood Sharing.',
      },
      base: {
        title: 'Foundations',
        description: 'Degree work: algorithms, data structures, OOP, and parallelism.',
        evidence: 'UTF-Projetos.',
      },
    },
  },
  contactSection: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    body: 'Email me, message me on LinkedIn, or download my CV. The code is on GitHub.',
    cv: 'Download CV (PDF)',
    newTab: ' (opens in a new tab)',
  },
  footer: {
    rights: (year) => `© ${year} Alan Diogo. All rights reserved.`,
    nav: 'Contact and source',
    source: 'Source of this site',
    linkedinSr: ' for Alan Diogo (opens in a new tab)',
    sourceSr: ' (opens in a new tab)',
  },
  projects: {
    grivy: {
      kind: 'Personal finance · Astrocode challenge',
      description:
        'Accounts, transactions, credit cards, and savings goals, with a published front end and its own REST API.',
      highlights: [
        'API in Java 21 and Spring Boot 4, with Spring Security, JWT, JPA, and Flyway migrations',
        'Front end in Nuxt 4 and Vue 3, with Vuetify, Pinia, and TanStack Query',
        'Tests with JUnit and Vitest, plus Docker and CI on GitHub Actions',
      ],
      note: 'The front end is published. The API is offline, so login and the dashboard may not work.',
      imageAlt: 'Grivy home page with a headline about not knowing where your money goes',
    },
    'mood-sharing': {
      kind: 'Mobile app + REST API',
      description:
        'An app for couples to share how they feel, in real time. A partner’s mood shows in the app and on an Android widget, and it switches to “happy” when the two of you are within 1 km.',
      highlights: [
        'Node.js, Express, and TypeScript API with MongoDB: moods, notes, photos, meetups, and media',
        'JWT with access and refresh tokens, bcrypt, Helmet, rate limiting, and NoSQL-injection sanitization',
        'React Native and Expo app with biometrics, push notifications, geolocation, and a Kotlin Android widget',
      ],
      note: 'There is no published site. The screenshot is the sign-in screen, opened in Expo’s web mode.',
      imageAlt: 'Mood Sharing sign-in screen, with email, password, and a Log in button',
    },
    codeleap: {
      kind: 'Social network · technical test',
      description: 'A place to create, edit, and delete posts, with likes, comments, and mentions.',
      highlights: [
        'Sign-in with a username or Google, and editing limited to the post’s author',
        'Repository pattern so the app can use a REST API or Firestore, with real-time updates and infinite scroll',
        'Validation with Zod, Redux Toolkit, and tests with Vitest',
      ],
      note: 'The published site asks you to sign in with Google. The screenshot is the new-post screen: the public posts API returned 503, so the feed is not in the image.',
      imageAlt: 'CodeLeap Network screen with the header and the “What’s on your mind?” form',
    },
    verdan: {
      kind: 'E-commerce · technical course capstone',
      description:
        'An online store built as the capstone for a technical course, with its own API and a desktop app for adding products.',
      highlights: [
        'Store in Next.js 13, React, and TypeScript, with Stitches, React Query, React Hook Form, and Zod',
        'API in Node.js, Express, and MongoDB, with JWT, bcrypt, and image upload',
        'Product admin in an Electron desktop app',
      ],
      note: 'There is no public deploy. The screenshot is the home page running locally. The product grid depends on the API, which is not published.',
      imageAlt: 'Verdan store home page with a banner about toys for every child',
    },
    'controle-financeiro': {
      kind: 'Personal finance',
      description:
        'Income, expenses, a balance summary, and transaction search. The interface talks to a local API built with json-server.',
      highlights: [
        'Income, expense, and total cards calculated on the client',
        'New-transaction modal with React Hook Form, Zod, and Radix',
        'Newest-first list and search by text',
      ],
      note: 'There is no public deploy. The finished version is commit a05ce48; the main branch does not have a runnable app. The screenshot uses the sample data from the repository.',
      imageAlt: 'Finance dashboard with income, expenses, a total, and the transaction list',
    },
    ishop: {
      kind: 'Online store with Stripe',
      description:
        'A shirt catalog loaded from Stripe at build time, with a product page and a checkout session created in an API route.',
      highlights: [
        'Home and product pages with SSG/ISR and dynamic routes',
        'API route that opens a Stripe Checkout session',
        'Carousel with Keen Slider and styling with Stitches',
      ],
      note: 'There is no public deploy. Without a Stripe key, the store shows the repository’s demo catalog: sample items, not for sale.',
      imageAlt: 'Local IShop catalog with a demo-catalog notice and sample shirts',
    },
    'coffee-delivery': {
      kind: 'Coffee shop · Ignite',
      description:
        'The Ignite coffee-shop challenge. The home page is the catalog, and the cart collects the order before confirmation.',
      highlights: [
        'Home with the hero, a Porto Alegre location, and an “Our coffees” section',
        'Cart with the item, quantity, total, and order confirmation',
        'Global theme in styled-components',
      ],
      imageAlt:
        'Coffee Delivery home with the catalog beside the cart, showing Traditional Espresso and the order total',
    },
    'todo-list': {
      kind: 'Todo list · Ignite',
      description:
        'A list for writing down what’s left to do: add a task, mark it done, and delete it. Data stays in memory and disappears on refresh.',
      highlights: [
        'The Create button stays disabled while the field is empty',
        'Counters for created and completed tasks',
        'Empty state when there are no tasks yet',
      ],
      imageAlt: 'Todo list with four tasks created and two completed, counters showing 4 and 2',
    },
    pomodoro: {
      kind: 'Ignite Time',
      description:
        'A pomodoro timer. You name the task and how many minutes you’ll work, start the cycle, and check the history in the browser.',
      highlights: [
        'Form with React Hook Form and Zod on the / route',
        'Countdown and a Start button',
        'Cycle history on /history, stored in localStorage',
      ],
      imageAlt:
        'Ignite Time screen with the logo, timer and history icons, a task field, a zeroed countdown, and a Start button',
    },
    'utf-projetos': {
      kind: 'Degree work · Software Engineering, UTFPR',
      description:
        'Coursework by subject, from exercises in C to a published site and concurrency experiments.',
      highlights: [
        'C for algorithms and data structures, Java for object-oriented programming',
        'Horizon Studio site in Dev-Web-Suf, published on GitHub Pages',
        'Experiments with OpenMP, Intel TBB, and semaphores',
      ],
      note: 'Some of the files are class exercises. A few do not compile on their own.',
    },
    'spring-user': {
      kind: 'User CRUD',
      description: 'A first pass at Java: user CRUD, with business rules kept apart from database access.',
      highlights: [
        'REST routes under /usuario to create, find by email, update, and delete',
        'Controller, business, repository, and Usuario entity layers',
        'In-memory H2 database, with the console at /h2-console',
      ],
    },
    'backend-receitas': {
      kind: 'Recipe API',
      description: 'A recipe API with users, categories, likes, and image upload.',
      highlights: [
        'Mongoose models for recipe, category, user, and like',
        'Use cases to create, list, and delete recipes, categories, and users',
        'Image upload with Multer',
      ],
    },
    icall: {
      kind: 'Design system',
      description: 'A design-system monorepo, with separate packages for tokens, React, ESLint, and TypeScript.',
      highlights: [
        'Workspaces in packages/tokens, packages/react, packages/eslint-config, and packages/ts-config',
      ],
    },
    'api-nodejs': {
      kind: 'API and front-end study',
      description:
        'A study project with a Node.js API and a React front end. The repository description is “Apenas aprendizado” (just learning).',
      highlights: [
        'Express API with Mongoose, Sequelize, MySQL, SQLite, and Socket.IO',
        'React front end with Vite, Axios, styled-components, and the Socket.IO client',
      ],
    },
    'nodejs-curso': {
      kind: 'Course exercises',
      description: 'Exercises and challenges from a Node.js course. The API starts an Express server on port 3333.',
      highlights: [
        'In-memory account signup, with ids from uuid',
        'A 400 response when the account already exists',
      ],
    },
    'exercicios-pdf': {
      kind: 'Programming logic · UTFPR',
      description:
        'UTFPR programming-logic worksheets, grouped into decision, repetition, and sequence, with HTML pages.',
      highlights: ['Conditionals, loops, and sequences', 'HTML, CSS, and JavaScript pages next to the PDFs'],
    },
    portfolio: {
      kind: 'This site',
      description:
        'A personal site in Next.js for projects, stack, and a CV, in English and Portuguese, with light and dark themes.',
      highlights: [
        'Pages Router, static pages, and strict TypeScript',
        'English at / and Brazilian Portuguese at /pt, with no automatic redirect',
        'Tailwind color tokens and next/image',
      ],
    },
  },
} satisfies Dictionary;
