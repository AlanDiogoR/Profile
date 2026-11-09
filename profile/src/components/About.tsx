import { useI18n } from '../i18n/context';
import Timeline from './Timeline';

export default function About() {
  const { role, sections, about } = useI18n();

  return (
    <section id={sections.about} aria-labelledby={`${sections.about}-heading`} className="section-anchor px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="reveal">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-brand-text">{about.eyebrow}</p>
          <h2 id={`${sections.about}-heading`} className="max-w-3xl text-3xl tracking-[-0.03em] md:text-4xl">
            {role}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.6] text-muted sm:text-lg">{about.body}</p>
        </div>
        <Timeline />
      </div>
    </section>
  );
}
