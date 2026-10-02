import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import Button from './Button';
import { bio } from '../data/bio';
import { contact } from '../data/contact';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="rise mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
            Aberto a vaga de programação e freelas
          </p>
          <h1 className="rise rise-1 text-[2.25rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {bio.name}
          </h1>
          <p className="rise rise-2 mt-4 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            <span className="text-ink">Desenvolvedor</span> — landing pages, portfólios e automação de WhatsApp
            para pequenos negócios.
          </p>
          <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={contact.whatsappGeneral} external>
              <FaWhatsapp size={18} aria-hidden /> Chamar no WhatsApp
            </Button>
            <Button href="#projetos" variant="secondary">
              Ver projetos
            </Button>
            <Button href="https://github.com/AlanDiogoR" variant="secondary" external>
              <FaGithub size={18} aria-hidden /> GitHub
            </Button>
          </div>
        </div>

        <aside
          aria-label="Resumo"
          className="rise rise-3 rounded-2xl border border-line bg-surface p-6 shadow-[0_20px_60px_-30px_rgb(0_0_0/0.6)]"
        >
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">Formação</dt>
              <dd className="text-ink">Engenharia de Software · UTFPR</dd>
              <dd className="text-muted">Técnico em Análise e Desenv. de Sistemas</dd>
            </div>
            <div>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">Atuação</dt>
              <dd className="text-ink">Fartura/SP e Cornélio Procópio/PR</dd>
              <dd className="text-muted">Atendimento por WhatsApp</dd>
            </div>
            <div>
              <dt className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">Stack</dt>
              <dd className="flex flex-wrap gap-2">
                {['TypeScript', 'React', 'Next.js', 'Node.js', 'Spring Boot'].map((t) => (
                  <span key={t} className="rounded-md bg-raised px-2.5 py-1 text-xs text-ink">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
