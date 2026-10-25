import { bio } from '../data/bio';
import Timeline from './Timeline';

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="section-anchor px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="reveal">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-brand-text">Sobre</p>
          <h2 id="sobre-titulo" className="max-w-3xl text-3xl tracking-[-0.03em] md:text-4xl">
            {bio.role}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.6] text-muted sm:text-lg">
            Estudante de Engenharia de Software na UTFPR. Construo APIs REST, front-ends tipados e apps mobile, do
            banco ao deploy. Técnico em Informática e Desenvolvimento de Sistemas (2021–2023).
          </p>
        </div>
        <Timeline />
      </div>
    </section>
  );
}
