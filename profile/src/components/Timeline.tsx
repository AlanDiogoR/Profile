import { HiExternalLink } from 'react-icons/hi';
import { timeline } from '../data/timeline';

const labels = { education: 'Formação', project: 'Projeto' } as const;

export default function Timeline() {
  return (
    <ol className="mt-8 border-t border-line">
      {timeline.map((item) => (
        <li key={`${item.year}-${item.title}`} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
          <p className="font-mono text-sm text-brand-text">{item.year}</p>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{labels[item.type]}</p>
            <h3 className="mt-1 text-xl tracking-[-0.02em]">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link inline-flex items-start gap-1.5 hover:text-brand-text"
                >
                  {item.title}
                  <span className="sr-only"> (código no GitHub, abre em nova aba)</span>
                  <HiExternalLink aria-hidden className="mt-1 shrink-0 text-muted" />
                </a>
              ) : (
                item.title
              )}
            </h3>
            <p className="mt-2 max-w-2xl text-base leading-[1.6] text-muted">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
