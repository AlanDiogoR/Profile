import Image from 'next/image';
import { HiExternalLink } from 'react-icons/hi';
import Section from './Section';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Trabalhos reais, com código e site públicos"
      intro="Negócios locais, produto próprio e a base acadêmica. Tudo abaixo você pode abrir e conferir."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.id} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
            {p.image ? (
              <div className="relative aspect-[8/5] w-full border-b border-line bg-raised">
                <Image
                  src={p.image}
                  alt={p.imageAlt ?? p.title}
                  fill
                  sizes="(min-width: 1152px) 560px, (min-width: 768px) 46vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div
                aria-hidden
                className="flex aspect-[8/5] w-full items-end border-b border-line bg-raised p-6 md:aspect-[16/5]"
              >
                <span className="font-display text-4xl font-bold text-muted">{p.title}</span>
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{p.kind}</p>
              <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologias de ${p.title}`}>
                {p.stack.map((t) => (
                  <li key={t} className="rounded-md bg-raised px-2.5 py-1 text-xs text-ink">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 pt-2">
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
          </li>
        ))}
      </ul>
    </Section>
  );
}
