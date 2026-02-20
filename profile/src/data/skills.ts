import type { SkillCard } from '../types';

export const skills: SkillCard[] = [
  {
    id: '1',
    title: 'Full Stack',
    description: 'Desenvolvimento web end-to-end com frameworks modernos',
    tech: ['Node.js', 'React', 'Next.js', 'Spring Boot', 'TypeScript'],
  },
  {
    id: '2',
    title: 'Mobile',
    description: 'Aplicações mobile multiplataforma',
    tech: ['React Native', 'Geolocation', 'Push Notifications', 'Biometrics'],
  },
  {
    id: '3',
    title: 'UI/UX',
    description: 'Interfaces responsivas e acessibilidade',
    tech: ['Responsive Design', 'Tailwind CSS', 'A11y'],
  },
  {
    id: '4',
    title: 'Backend',
    description: 'APIs REST e camada de dados',
    tech: ['REST APIs', 'JWT', 'PostgreSQL', 'MongoDB', 'Express'],
  },
];
