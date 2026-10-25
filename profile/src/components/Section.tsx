import type { ReactNode } from 'react';

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="section-anchor px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="reveal">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-brand-text">{eyebrow}</p>
          <h2 id={`${id}-titulo`} className="max-w-3xl text-3xl tracking-[-0.03em] md:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-2xl text-base leading-[1.6] text-muted sm:text-lg">{intro}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
