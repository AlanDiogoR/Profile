import Section from './Section';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tecnologias que eu realmente uso"
      intro="Levantado dos meus repositórios públicos. Cada grupo indica onde você pode ver o código."
      tone="surface"
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <li key={s.id} className="flex flex-col rounded-2xl border border-line bg-bg p-6">
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologias de ${s.title}`}>
              {s.tech.map((t) => (
                <li key={t} className="rounded-md bg-raised px-2.5 py-1 text-xs text-ink">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-4 text-xs text-muted">Visto em: {s.evidence}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
