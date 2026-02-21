import { useInView } from '../hooks/useInView';
import { timeline } from '../data/timeline';

const typeColors: Record<string, string> = {
  project: 'bg-accent-purple/20 text-accent-purple border-accent-purple/40',
  education: 'bg-accent-indigo/20 text-accent-indigo border-accent-indigo/40',
  work: 'bg-dark-700 text-[var(--color-text)] border-dark-600',
  milestone: 'bg-green-500/20 text-green-400 border-green-500/40',
};

export default function Timeline() {
  const [ref, isInView] = useInView<HTMLElement>({ once: true, margin: '-80px', mobileMargin: '0px' });

  const transitionClass = 'transition-all duration-500';
  const visibleClass = isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4';

  return (
    <section
      id="timeline"
      ref={ref}
      className="py-20 px-4 sm:px-6 bg-dark-950 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4 ${transitionClass} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Linha do tempo
        </h2>
        <p
          className={`text-[var(--color-text-muted)] text-lg mb-12 ${transitionClass} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={isInView ? { transitionDelay: '0.1s' } : {}}
        >
          Trajetória desde 2020 — projetos, formação e experiência.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent-purple via-dark-700 to-transparent" />
          <div className="space-y-8">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              const content = (
                <div
                  className={`flex-1 min-w-0 ${isLeft ? 'text-right pr-4 sm:pr-6' : 'text-left pl-4 sm:pl-6'}`}
                >
                  <div className={`flex flex-wrap items-center gap-2 mb-1 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-accent-purple font-mono text-sm">{item.year}</span>
                    <span className={`px-2 py-0.5 text-xs rounded border ${typeColors[item.type]}`}>
                      {item.type === 'project' && 'Projeto'}
                      {item.type === 'education' && 'Formação'}
                      {item.type === 'work' && 'Experiência'}
                      {item.type === 'milestone' && 'Marco'}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent-purple transition-colors focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">{item.description}</p>
                  )}
                </div>
              );
              const dot = (
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-accent-purple border-2 border-dark-950 ring-4 ring-dark-950" />
              );

              return (
                <div
                  key={`${item.year}-${item.title}-${i}`}
                  className={`relative flex items-center gap-0 ${transitionClass} ${visibleClass}`}
                  style={isInView ? { transitionDelay: `${0.15 + i * 0.05}s` } : {}}
                >
                  {isLeft ? (
                    <>
                      {content}
                      {dot}
                      <div className="flex-1 min-w-0" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1 min-w-0" />
                      {dot}
                      {content}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
