import type { ReactNode } from 'react';

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: 'base' | 'surface';
}

export default function Section({ id, eyebrow, title, intro, children, tone = 'base' }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className={`scroll-mt-16 px-4 py-20 sm:px-6 sm:py-24 ${tone === 'surface' ? 'border-y border-line bg-surface' : ''}`}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
        <h2 id={`${id}-titulo`} className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
