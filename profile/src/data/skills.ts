export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  tech: string[];
  /** Projetos públicos onde a tecnologia é usada de fato. */
  evidence: string;
}

/** Derivado do que os repositórios públicos realmente usam. */
export const skills: SkillGroup[] = [
  {
    id: 'front',
    title: 'Front-end',
    description: 'Interfaces responsivas, acessíveis e tipadas.',
    tech: ['TypeScript', 'React', 'Next.js', 'Vue 3', 'Nuxt', 'Redux Toolkit', 'Tailwind CSS'],
    evidence: 'Grivy, CodeLeap Network, Verdan, IShop',
  },
  {
    id: 'back',
    title: 'Back-end',
    description: 'APIs REST com autenticação, validação e camadas bem separadas.',
    tech: ['Node.js', 'Express', 'Java 21', 'Spring Boot', 'Spring Security', 'JWT'],
    evidence: 'Mood Sharing, Grivy, Verdan',
  },
  {
    id: 'dados',
    title: 'Banco de dados',
    description: 'Modelagem, migrações e persistência relacional e NoSQL.',
    tech: ['PostgreSQL', 'MongoDB', 'JPA', 'Flyway', 'Firestore'],
    evidence: 'Grivy, Mood Sharing, CodeLeap Network',
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description: 'App multiplataforma consumindo API própria.',
    tech: ['React Native', 'Expo'],
    evidence: 'Mood Sharing',
  },
  {
    id: 'qualidade',
    title: 'Qualidade e entrega',
    description: 'Testes automatizados, containers e deploy.',
    tech: ['Jest', 'Vitest', 'JUnit', 'Docker', 'GitHub Actions', 'Vercel', 'Netlify'],
    evidence: 'Grivy, CodeLeap Network, Mood Sharing',
  },
  {
    id: 'base',
    title: 'Fundamentos',
    description: 'Base da graduação: algoritmos, estruturas de dados, POO e paralelismo.',
    tech: ['C', 'C++', 'Java (POO)', 'SQL', 'OpenMP'],
    evidence: 'UTF-Projetos',
  },
];
