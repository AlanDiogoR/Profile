import { featuredProjects, moreProjects } from '../data/projects';
import { useI18n } from '../i18n/context';
import ProjectCard from './ProjectCard';
import Section from './Section';

export default function Projects() {
  const { sections, projectsSection } = useI18n();

  return (
    <Section
      id={sections.projects}
      eyebrow={projectsSection.eyebrow}
      title={projectsSection.title}
      intro={projectsSection.intro}
    >
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {featuredProjects.map((project) => (
          <li key={project.id} className="reveal min-w-0">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      <details className="group mt-8 border border-line bg-surface">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 [&::-webkit-details-marker]:hidden">
          <span className="font-display text-lg font-bold tracking-tight">{projectsSection.moreSummary(moreProjects.length)}</span>
          <span aria-hidden className="font-mono text-sm text-muted group-open:hidden">
            +
          </span>
          <span aria-hidden className="hidden font-mono text-sm text-muted group-open:inline">
            −
          </span>
        </summary>
        <div className="border-t border-line px-5 py-6 sm:px-6">
          <p className="max-w-2xl text-base leading-[1.6] text-muted">{projectsSection.moreIntro}</p>
          <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {moreProjects.map((project) => (
              <li key={project.id} className="min-w-0">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </details>
    </Section>
  );
}
