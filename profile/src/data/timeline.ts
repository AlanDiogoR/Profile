export const timeline = [
  { id: 'astrocode', type: 'work' },
  { id: 'utfpr', type: 'education', link: 'https://github.com/AlanDiogoR/UTF-Projetos' },
  { id: 'grivy', type: 'project', link: 'https://github.com/AlanDiogoR/Desafio-Astrocode' },
  { id: 'verdan', type: 'project', link: 'https://github.com/AlanDiogoR/TCC' },
  { id: 'etec', type: 'education' },
] as const;

export type TimelineId = (typeof timeline)[number]['id'];
export type TimelineType = (typeof timeline)[number]['type'];
