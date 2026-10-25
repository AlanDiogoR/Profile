import Image from 'next/image';
import { HiExternalLink, HiInformationCircle } from 'react-icons/hi';
import Tag from './Tag';
import type { Project } from '../data/projects';

export default function ProjectCard({
  project: p,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const fit = p.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover object-top';

  return (
    <article
      aria-labelledby={`projeto-${p.id}`}
      className="surface-card flex h-full flex-col overflow-hidden bg-surface lg:flex-row"
    >
      {p.image && (
        <div className="relative aspect-[16/10] border-b border-line bg-raised lg:w-[46%] lg:border-b-0 lg:border-r">
          <Image
            src={p.image}
            alt={p.imageAlt ?? `Captura de tela do projeto ${p.title}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 520px, 100vw"
            className={fit}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-text">{p.kind}</p>
        <h3 id={`projeto-${p.id}`} className="mt-2 text-2xl tracking-[-0.03em] sm:text-3xl">
          {p.title}
        </h3>

        <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted">Problema</p>
        <p className="mt-2 text-base leading-[1.6] text-ink">{p.description}</p>

        <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted">Solução</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-base leading-[1.6] marker:text-brand-text">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        {p.note && (
          <p className="mt-4 flex gap-2 border border-line bg-raised p-3 text-sm leading-[1.6] text-muted">
            <HiInformationCircle size={16} aria-hidden className="mt-1 shrink-0 text-brand-text" />
            <span>{p.note}</span>
          </p>
        )}

        <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted">Stack</p>
        <ul className="mt-2 flex flex-wrap gap-2" aria-label={`Tecnologias de ${p.title}`}>
          {p.stack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 border-t border-line pt-4">
          {p.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-brand-text"
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
