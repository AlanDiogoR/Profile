export const skills = [
  {
    id: 'front',
    tech: ['TypeScript', 'React', 'Next.js', 'Angular', 'Vue 3', 'Nuxt', 'Redux Toolkit', 'Tailwind CSS'],
  },
  {
    id: 'back',
    tech: ['Node.js', 'Express', 'Java 21', 'Spring Boot', 'Spring Security', 'JWT'],
  },
  {
    id: 'dados',
    tech: ['PostgreSQL', 'PL/SQL', 'MongoDB', 'JPA', 'Flyway', 'Firestore'],
  },
  {
    id: 'mobile',
    tech: ['React Native', 'Expo'],
  },
  {
    id: 'qualidade',
    tech: ['Jest', 'Vitest', 'JUnit', 'Docker', 'GitHub Actions', 'Vercel', 'Netlify'],
  },
  {
    id: 'base',
    tech: ['C', 'C++', 'Java (POO)', 'SQL', 'OpenMP'],
  },
] as const;

export type SkillId = (typeof skills)[number]['id'];
