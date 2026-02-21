import { useInView } from '../hooks/useInView';
import { skills } from '../data/skills';

export default function Skills() {
  const [ref, isInView] = useInView<HTMLElement>({ once: true, margin: '-100px', mobileMargin: '0px' });

  const transitionClass = 'transition-all duration-500';
  const visibleClass = isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5';

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4 ${transitionClass} ${visibleClass}`}
        >
          Skills & Expertise
        </h2>
        <p
          className={`text-[var(--color-text-muted)] text-lg mb-12 max-w-2xl ${transitionClass} ${visibleClass}`}
          style={isInView ? { transitionDelay: '0.1s' } : {}}
        >
          Tecnologias e áreas com as quais trabalho.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.id}
              className={`p-6 rounded-xl bg-dark-900 border border-dark-800 hover:border-accent-purple/50 hover:-translate-y-1 transition-all ${transitionClass} ${visibleClass}`}
              style={isInView ? { transitionDelay: `${0.2 + i * 0.05}s` } : {}}
            >
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-accent-purple/20 text-accent-purple text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
