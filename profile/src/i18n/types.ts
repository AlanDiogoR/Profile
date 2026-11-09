import type { ProjectId, ProjectLinkId } from '../data/projects';
import type { SkillId } from '../data/skills';
import type { TimelineId, TimelineType } from '../data/timeline';

type NotedProjectId =
  | 'mood-sharing'
  | 'grivy'
  | 'codeleap'
  | 'verdan'
  | 'controle-financeiro'
  | 'ishop'
  | 'utf-projetos';

type ImagedProjectId =
  | 'mood-sharing'
  | 'grivy'
  | 'codeleap'
  | 'verdan'
  | 'controle-financeiro'
  | 'ishop'
  | 'todo-list'
  | 'coffee-delivery'
  | 'pomodoro';

interface ProjectCopyBase {
  kind: string;
  description: string;
  highlights: readonly [string, ...string[]];
}

export type ProjectCopy<Id extends ProjectId> = ProjectCopyBase &
  (Id extends NotedProjectId ? { note: string } : { note?: string }) &
  (Id extends ImagedProjectId ? { imageAlt: string } : { imageAlt?: string });

export interface Dictionary {
  locale: 'en' | 'pt';
  htmlLang: 'en' | 'pt-BR';
  ogLocale: 'en_US' | 'pt_BR';
  path: '/' | '/pt';
  role: string;
  skipToContent: string;
  seo: {
    title: string;
    description: string;
    ogImageAlt: string;
  };
  education: {
    school: string;
  };
  sections: {
    home: string;
    projects: string;
    about: string;
    stack: string;
    contact: string;
    content: string;
  };
  header: {
    mainNav: string;
    mobileNav: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    themeToLight: string;
    themeToDark: string;
    languages: string;
  };
  hero: {
    imageAlt: string;
    lede: string;
    viewProjects: string;
    contact: string;
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    intro: string;
    problem: string;
    solution: string;
    stack: string;
    moreSummary: (count: number) => string;
    moreIntro: string;
    techOf: (title: string) => string;
    externalLink: (title: string) => string;
    imageFallback: (title: string) => string;
    linkLabel: Record<ProjectLinkId, string>;
  };
  about: {
    eyebrow: string;
    body: string;
  };
  timeline: {
    labels: Record<TimelineType, string>;
    externalLink: string;
    items: Record<TimelineId, { year: string; title: string; description: string }>;
  };
  skillsSection: {
    eyebrow: string;
    title: string;
    intro: string;
    seenIn: string;
    techOf: (title: string) => string;
    groups: Record<SkillId, { title: string; description: string; evidence: string }>;
  };
  contactSection: {
    eyebrow: string;
    title: string;
    body: string;
    cv: string;
    newTab: string;
  };
  footer: {
    rights: (year: number) => string;
    nav: string;
    source: string;
    linkedinSr: string;
    sourceSr: string;
  };
  projects: { [Id in ProjectId]: ProjectCopy<Id> };
}
