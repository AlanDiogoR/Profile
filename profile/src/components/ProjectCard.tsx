import Image from 'next/image';
import { HiExternalLink, HiInformationCircle } from 'react-icons/hi';
import type { ProjectMeta } from '../data/projects';
import { useI18n } from '../i18n/context';
import Tag from './Tag';

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  const { locale, projects, projectsSection } = useI18n();
  const copy = projects[project.id];
  const title = project.id === 'portfolio' && locale === 'en' ? 'Portfolio' : titles[project.id];
  const fit = project.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover object-top';

  return (
    <article
      aria-labelledby={`project-${project.id}`}
      className="surface-card flex h-full flex-col overflow-hidden bg-surface"
    >
      {project.image && (
        <div className="relative aspect-[16/10] border-b border-line bg-raised">
          <Image
            src={project.image}
            alt={copy.imageAlt ?? projectsSection.imageFallback(title)}
            fill
            loading="lazy"
            sizes="(min-width: 768px) 50vw, 100vw"
            className={fit}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-text">{copy.kind}</p>
        <h3 id={`project-${project.id}`} className="mt-2 text-2xl tracking-[-0.03em]">
          {title}
        </h3>

        <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted">{projectsSection.problem}</p>
        <p className="mt-2 text-base leading-[1.6] text-ink">{copy.description}</p>

        <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted">{projectsSection.solution}</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-base leading-[1.6] marker:text-brand-text">
          {copy.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        {copy.note && (
          <p className="mt-4 flex gap-2 border border-line bg-raised p-3 text-sm leading-[1.6] text-muted">
            <HiInformationCircle size={16} aria-hidden className="mt-1 shrink-0 text-brand-text" />
            <span>{copy.note}</span>
          </p>
        )}

        <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted">{projectsSection.stack}</p>
        <ul className="mt-2 flex flex-wrap gap-2" aria-label={projectsSection.techOf(title)}>
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 border-t border-line pt-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-brand-text"
            >
              {projectsSection.linkLabel[link.id]}
              <span className="sr-only">{projectsSection.externalLink(title)}</span>
              <HiExternalLink aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

const titles: Record<ProjectMeta['id'], string> = {
  grivy: 'Grivy',
  'mood-sharing': 'Mood Sharing',
  codeleap: 'CodeLeap Network',
  verdan: 'Verdan',
  'controle-financeiro': 'Controle Financeiro',
  ishop: 'IShop',
  'coffee-delivery': 'Coffee Delivery',
  'todo-list': 'Todo List',
  pomodoro: 'Pomodoro',
  'utf-projetos': 'UTF-Projetos',
  'spring-user': 'Spring User',
  'backend-receitas': 'Backend Receitas',
  icall: 'ICall',
  'api-nodejs': 'API Node.js',
  'nodejs-curso': 'Node.js',
  'exercicios-pdf': 'Exercícios PDF',
  portfolio: 'Portfólio',
};
