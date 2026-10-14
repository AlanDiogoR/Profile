export type TimelineType = 'education' | 'project';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: TimelineType;
  link?: string;
}

/** Só fatos verificáveis (repositórios públicos e formação). */
export const timeline: TimelineItem[] = [
  {
    year: '2021–2023',
    title: 'Técnico em Informática e Desenvolvimento de Sistemas',
    description: 'Etec Terezinha Monteiro dos Santos. Base em programação, banco de dados e web.',
    type: 'education',
  },
  {
    year: '2022',
    title: 'Verdan, e-commerce full stack',
    description: 'Trabalho de conclusão do curso técnico: loja, API REST e painel em Electron.',
    type: 'project',
    link: 'https://github.com/AlanDiogoR/TCC',
  },
  {
    year: 'Atualmente',
    title: 'Bacharelado em Engenharia de Software, UTFPR Cornélio Procópio',
    description: 'Exercícios e projetos da graduação no UTF-Projetos.',
    type: 'education',
    link: 'https://github.com/AlanDiogoR/UTF-Projetos',
  },
  {
    year: '2026',
    title: 'Grivy',
    description: 'Controle financeiro: Spring Boot (Java 21) e PostgreSQL no back, Nuxt/Vue no front.',
    type: 'project',
    link: 'https://github.com/AlanDiogoR/Desafio-Astrocode',
  },
];
