import Image from 'next/image';
import type { Project } from '../types';
import { HiExternalLink } from 'react-icons/hi';

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export default function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const transitionClass = 'transition-all duration-500';
  const visibleClass = isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  const linkUrl = project.linkDemo ?? project.linkRepo ?? project.link;

  return (
    <article
      className={`group rounded-xl overflow-hidden bg-dark-900 border border-dark-800 hover:border-accent-purple/50 hover:-translate-y-1 cursor-pointer ${transitionClass} ${visibleClass}`}
      style={isInView ? { transitionDelay: `${index * 0.1}s` } : {}}
    >
      <div className="relative h-48 sm:h-56 bg-dark-800 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={project.image.startsWith('http')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent opacity-80" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <h3 className="text-xl font-semibold text-[var(--color-text)]">
            {project.title}
          </h3>
          {project.inProduction && (
            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/40">
              Em produção
            </span>
          )}
          {project.year && (
            <span className="text-xs text-[var(--color-text-muted)]">{project.year}</span>
          )}
        </div>
        <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-dark-800 text-[var(--color-text-muted)] text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent-purple hover:text-accent-indigo font-medium text-sm transition-colors focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
        >
          {project.linkDemo ? 'Ver demo' : 'Ver no GitHub'}
          <HiExternalLink size={16} />
        </a>
      </div>
    </article>
  );
}
