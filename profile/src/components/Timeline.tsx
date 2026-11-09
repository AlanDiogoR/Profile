import { HiExternalLink } from 'react-icons/hi';
import { timeline } from '../data/timeline';
import { useI18n } from '../i18n/context';

export default function Timeline() {
  const { timeline: copy } = useI18n();

  return (
    <ol className="mt-8 border-t border-line">
      {timeline.map((item) => {
        const text = copy.items[item.id];
        return (
          <li
            key={item.id}
            className="reveal grid gap-2 border-b border-line py-5 sm:grid-cols-[14.5rem_1fr] sm:gap-8"
          >
            <p className="font-mono text-sm text-brand-text">{text.year}</p>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{copy.labels[item.type]}</p>
              <h3 className="mt-1 text-xl tracking-[-0.02em]">
                {'link' in item && item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link inline-flex items-start gap-1.5 hover:text-brand-text"
                  >
                    {text.title}
                    <span className="sr-only">{copy.externalLink}</span>
                    <HiExternalLink aria-hidden className="mt-1 shrink-0 text-muted" />
                  </a>
                ) : (
                  text.title
                )}
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-[1.6] text-muted">{text.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
