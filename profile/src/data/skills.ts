export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  tech: string[];
  /** Projetos públicos onde a tecnologia é usada de fato. */
  evidence: string;
}

/** Derivado do que os repositórios públicos realmente usam (package.json, pom.xml, README). */
export const skills: SkillGroup[] = [
  {
    id: 'front',
    title: 'Front-end',
    description: 'Interfaces responsivas, acessíveis e tipadas.',
    tech: ['TypeScript', 'React', 'Next.js', 'Vue 3', 'Nuxt', 'Tailwind CSS', 'Vuetify', 'Framer Motion'],
    evidence: 'Bike Center, Grivy, Kabeção Veículos',
  },
  {
    id: 'back',
    title: 'Back-end',
    description: 'APIs REST com autenticação, validação e camadas bem separadas.',
    tech: ['Java 21', 'Spring Boot', 'Spring Security', 'Node.js', 'Express', 'Prisma', 'JWT', 'Zod'],
    evidence: 'Grivy, Bike Center',
  },
  {
    id: 'dados',
    title: 'Banco de dados',
    description: 'Modelagem, migrações e persistência relacional e NoSQL.',
    tech: ['PostgreSQL', 'MongoDB', 'JPA', 'Flyway', 'SQLite'],
    evidence: 'Grivy, Bike Center, SECOMP CyberSec',
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description: 'App multiplataforma compartilhando código com a web.',
    tech: ['React Native', 'Expo', 'Expo Router', 'NativeWind', 'TanStack Query', 'Zustand'],
    evidence: 'Bike Center (apps/mobile)',
  },
  {
    id: 'qualidade',
    title: 'Qualidade e entrega',
    description: 'Testes automatizados, containers e deploy.',
    tech: ['Vitest', 'JUnit', 'Docker', 'GitHub Actions', 'Vercel', 'Netlify', 'Railway'],
    evidence: 'Bike Center, Grivy, Kabeção Veículos',
  },
  {
    id: 'seguranca',
    title: 'Segurança de aplicações',
    description: 'Laboratório educacional de falhas web (CTF e correção) em três linguagens.',
    tech: ['Java', 'Python (Flask)', 'C# (ASP.NET Core)', 'AppSec'],
    evidence: 'Desafio SECOMP CyberSec',
  },
  {
    id: 'base',
    title: 'Fundamentos',
    description: 'Base da graduação: algoritmos, estruturas de dados e sistemas.',
    tech: ['C', 'C++', 'Python', 'Algoritmos', 'Sistemas Operacionais'],
    evidence: 'UTF-Projetos',
  },
];
