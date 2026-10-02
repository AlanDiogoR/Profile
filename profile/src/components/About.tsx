import Section from './Section';
import { bio } from '../data/bio';

export default function About() {
  return (
    <Section id="sobre" eyebrow="Sobre" title="Quem vai construir o seu projeto" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 text-base leading-relaxed sm:text-lg">
          {bio.about.map((p) => (
            <p key={p} className="text-muted first:text-ink">
              {p}
            </p>
          ))}
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">Formação</h3>
            <ul className="space-y-4">
              {bio.education.map((e) => (
                <li key={e.title} className="border-l-2 border-brand pl-4">
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-sm text-muted">
                    {e.place}
                    {'note' in e && e.note ? ` · ${e.note}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">Tecnologias</h3>
            <ul className="flex flex-wrap gap-2">
              {bio.stack.map((t) => (
                <li key={t} className="rounded-md border border-line bg-bg px-2.5 py-1 text-xs text-ink">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
