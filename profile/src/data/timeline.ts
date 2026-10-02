export type TimelineType = 'education' | 'project';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: TimelineType;
  link?: string;
}

/** Só fatos verificáveis (repositórios públicos e formação). Anos de projeto = criação do repositório. */
export const timeline: TimelineItem[] = [
  {
    year: '2020–2023',
    title: 'Técnico em Informática e Desenvolvimento de Sistemas',
    description: 'Base em programação, banco de dados e desenvolvimento web.',
    type: 'education',
  },
  {
    year: '2022',
    title: 'TCC do curso técnico',
    description: 'Trabalho de conclusão de curso, com código público.',
    type: 'project',
    link: 'https://github.com/AlanDiogoR/TCC',
  },
  {
    year: 'Atualmente',
    title: 'Estudante de Engenharia de Software, UTFPR Cornélio Procópio',
    description: 'Exercícios e projetos da graduação no UTF-Projetos.',
    type: 'education',
    link: 'https://github.com/AlanDiogoR/UTF-Projetos',
  },
  {
    year: '2026',
    title: 'Grivy',
    description: 'Controle financeiro pessoal: Nuxt/Vue no front, Spring Boot (Java 21) e PostgreSQL no back.',
    type: 'project',
    link: 'https://github.com/AlanDiogoR/Desafio-Astrocode',
  },
  {
    year: '2026',
    title: 'Bike Center',
    description: 'Projeto para comércio local em Fartura/SP: site, API e app mobile, com orçamento pelo WhatsApp.',
    type: 'project',
    link: 'https://github.com/AlanDiogoR/bike-center',
  },
  {
    year: '2026',
    title: 'Kabeção Veículos',
    description: 'Landing page estilo Linktree para revenda local, com SEO e testes automatizados.',
    type: 'project',
    link: 'https://github.com/AlanDiogoR/kabecao-veiculos',
  },
  {
    year: '2026',
    title: 'Desafio SECOMP CyberSec',
    description: 'Laboratório de segurança web (CTF e correção) em Java, Python e C#.',
    type: 'project',
    link: 'https://github.com/AlanDiogoR/Desafi-SECOMP_2026_CyberSec',
  },
];
