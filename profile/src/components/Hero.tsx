import { FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Button from './Button';
import { bio } from '../data/bio';
import { contact } from '../data/contact';
import { cvUrl } from '../config';

const heroStack = ['TypeScript', 'React', 'Next.js', 'Node.js', 'Java', 'Spring Boot'];

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="rise mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
            Aberto a estágio e vaga júnior
          </p>
          <h1 id="inicio-titulo" className="rise rise-1 text-[2.25rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {bio.name}
          </h1>
          <p className="rise rise-2 mt-4 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            <span className="text-ink">{bio.role}</span> e estudante de Engenharia de Software na UTFPR. Construo
            APIs REST, front-ends tipados e apps mobile, do banco ao deploy.
          </p>
          <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projetos">Ver projetos</Button>
            <Button href={cvUrl} variant="secondary" download>
              <HiDownload size={18} aria-hidden /> Baixar currículo (PDF)
            </Button>
          </div>
          <p className="rise rise-3 mt-4 text-sm">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-brand hover:underline"
            >
              <FaGithub size={18} aria-hidden /> github.com/AlanDiogoR
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </p>
        </div>

        <aside
          aria-label="Resumo"
          className="rise rise-3 rounded-2xl border border-line bg-surface p-6 shadow-[0_20px_60px_-30px_rgb(0_0_0/0.6)]"
        >
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">Formação</dt>
              <dd className="text-ink">Engenharia de Software · UTFPR</dd>
              <dd className="text-muted">Técnico em Informática e Desenv. de Sistemas (2021–2023)</dd>
            </div>
            <div>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">Procuro</dt>
              <dd className="text-ink">Estágio ou vaga júnior</dd>
              <dd className="text-muted">Back-end ou full stack</dd>
            </div>
            <div>
              <dt className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">Stack</dt>
              <dd>
                <ul className="flex flex-wrap gap-2" aria-label="Stack principal">
                  {heroStack.map((t) => (
                    <li key={t} className="rounded-md bg-raised px-2.5 py-1 text-xs text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
