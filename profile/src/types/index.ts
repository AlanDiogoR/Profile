export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  /** Link do repositório (GitHub). Mantido por compatibilidade; use linkRepo se separar demo/repo. */
  image: string;
  year?: string;
  inProduction?: boolean;
  linkDemo?: string;
  linkRepo?: string;
}

export interface SkillCard {
  id: string;
  title: string;
  description: string;
  tech: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description?: string;
  type: 'project' | 'education' | 'work' | 'milestone';
  link?: string;
}
