import Image from 'next/image';
import { HiExternalLink, HiInformationCircle } from 'react-icons/hi';
import Tag from './Tag';
import type { Project } from '../data/projects';

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article
      aria-labelledby={`projeto-${p.id}`}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface"
    >
      {p.image && (
        <div className="relative aspect-[8/5] w-full border-b border-line bg-raised">
          <Image
            src={p.image}
            alt={p.imageAlt ?? `Captura de tela do projeto ${p.title}`}
            fill
            sizes="(min-width: 1152px) 560px, (min-width: 768px) 46vw, 100vw"
            className={p.imageFit === 'contain' ? 'object-contain' : 'object-cover object-top'}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{p.kind}</p>
        <h3 id={`projeto-${p.id}`} className="mt-2 text-xl font-bold">
          {p.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink marker:text-brand">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        {p.note && (
          <p className="mt-4 flex gap-2 rounded-lg border border-line bg-raised p-3 text-xs leading-relaxed text-muted">
            <HiInformationCircle size={16} aria-hidden className="mt-px shrink-0 text-accent" />
            <span>{p.note}</span>
          </p>
        )}
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologias de ${p.title}`}>
          {p.stack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-1 pt-4">
          {p.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              {l.label}
              <span className="sr-only"> de {p.title} (abre em nova aba)</span>
              <HiExternalLink aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
