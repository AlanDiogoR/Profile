import { skills } from '../data/skills';
import { useI18n } from '../i18n/context';
import Tag from './Tag';

export default function Skills() {
  const { sections, skillsSection } = useI18n();

  return (
    <section
      id={sections.stack}
      aria-labelledby={`${sections.stack}-heading`}
      className="section-anchor border-y border-line bg-surface px-4 py-8 sm:px-6 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-brand-text">{skillsSection.eyebrow}</p>
          <h2 id={`${sections.stack}-heading`} className="max-w-3xl text-3xl tracking-[-0.03em] md:text-4xl">
            {skillsSection.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.6] text-muted sm:text-lg">{skillsSection.intro}</p>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => {
            const copy = skillsSection.groups[skill.id];
            return (
              <li key={skill.id} className="reveal min-w-0">
                <div className="surface-card flex h-full flex-col bg-bg p-5 sm:p-6">
                  <p className="font-mono text-xs text-brand-text">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 text-2xl tracking-[-0.02em]">{copy.title}</h3>
                  <p className="mt-2 text-base leading-[1.6] text-muted">{copy.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={skillsSection.techOf(copy.title)}>
                    {skill.tech.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </ul>
                  <p className="mt-auto pt-4 font-mono text-xs leading-[1.6] text-muted">
                    {skillsSection.seenIn} {copy.evidence}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
