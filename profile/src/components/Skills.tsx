import Tag from './Tag';
import Reveal from './Reveal';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="stack" aria-labelledby="stack-titulo" className="scroll-mt-20 border-y border-line bg-surface px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-brand-text">Stack</p>
        <h2 id="stack-titulo" className="max-w-3xl text-3xl tracking-[-0.03em] md:text-4xl">
          Tecnologias que eu realmente uso
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-[1.6] text-muted sm:text-lg">
          Levantado dos meus repositórios públicos. Cada grupo indica onde você pode ver o código.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <li key={skill.id}>
              <Reveal className="h-full">
                <div className="surface-card flex h-full flex-col bg-bg p-5 sm:p-6">
                  <p className="font-mono text-xs text-brand-text">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 text-2xl tracking-[-0.02em]">{skill.title}</h3>
                  <p className="mt-2 text-base leading-[1.6] text-muted">{skill.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologias de ${skill.title}`}>
                    {skill.tech.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </ul>
                  <p className="mt-auto pt-4 font-mono text-xs leading-[1.6] text-muted">Visto em: {skill.evidence}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
