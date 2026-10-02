import { FaWhatsapp } from 'react-icons/fa';
import { HiCheck, HiClock } from 'react-icons/hi';
import Section from './Section';
import Button from './Button';
import { services, serviceTerms } from '../data/services';

export default function Services() {
  return (
    <Section
      id="servicos"
      eyebrow="Serviços"
      title="Três entregas rápidas, com escopo fechado"
      intro="Para quem quer sair do Instagram e do Google direto para o WhatsApp do negócio. Valores de entrada; o orçamento final depende do escopo."
      tone="surface"
    >
      <ul className="grid gap-6 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.id} className="flex flex-col rounded-2xl border border-line bg-bg p-6 sm:p-7">
            <h3 className="text-xl font-bold leading-snug">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.forWho}</p>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-xs uppercase tracking-wider text-muted">a partir de</span>
              <span className="font-display text-3xl font-bold text-ink">{s.from}</span>
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <HiClock aria-hidden className="text-accent" /> Prazo: {s.deadline}
            </p>
            <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6 text-sm">
              {s.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <HiCheck aria-hidden className="mt-0.5 shrink-0 text-brand" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href={s.whatsapp} external className="mt-8 w-full">
              <FaWhatsapp size={18} aria-hidden /> Pedir orçamento
              <span className="sr-only"> de {s.title}</span>
            </Button>
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-2xl border border-dashed border-line p-6">
        <h3 className="text-sm font-semibold">Como funciona</h3>
        <ul className="mt-3 grid gap-x-8 gap-y-2 text-sm text-muted sm:grid-cols-2">
          {serviceTerms.map((t) => (
            <li key={t} className="flex gap-2.5">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
