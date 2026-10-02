import { HiExternalLink } from 'react-icons/hi';
import Section from './Section';
import { timeline } from '../data/timeline';

const labels = { education: 'Formação', project: 'Projeto' } as const;

export default function Timeline() {
  return (
    <Section
      id="timeline"
      eyebrow="Trajetória"
      title="Formação e projetos, em ordem"
      intro="Estudante de Engenharia de Software na UTFPR, com técnico em Informática e Desenvolvimento de Sistemas (2020–2023)."
    >
      <ol className="relative space-y-8 border-l-2 border-line pl-6 sm:pl-8">
        {timeline.map((item) => (
          <li key={`${item.year}-${item.title}`} className="relative">
            <span
              aria-hidden
              className={`absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-bg sm:-left-[41px] ${item.type === 'education' ? 'bg-accent' : 'bg-brand'}`}
            />
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-sm text-accent">{item.year}</span>
              <span className="rounded border border-line px-2 py-0.5 text-xs text-muted">{labels[item.type]}</span>
            </div>
            <h3 className="mt-1 text-lg font-bold">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-brand"
                >
                  {item.title}
                  <span className="sr-only"> (código no GitHub, abre em nova aba)</span>
                  <HiExternalLink aria-hidden className="shrink-0 text-muted" />
                </a>
              ) : (
                item.title
              )}
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
