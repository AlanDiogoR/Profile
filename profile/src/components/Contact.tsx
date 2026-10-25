import { FaGithub } from 'react-icons/fa';
import { HiDownload, HiMail } from 'react-icons/hi';
import Button from './Button';
import { contact } from '../data/contact';
import { cvUrl } from '../config';

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="scroll-mt-20 px-4 py-8 sm:px-6 md:py-12">
      <div className="mx-auto max-w-6xl border border-line bg-surface px-5 py-10 sm:px-10 sm:py-14">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-brand-text">Contato</p>
        <h2 id="contato-titulo" className="mt-3 max-w-3xl text-4xl tracking-[-0.04em] sm:text-5xl">
          Falar comigo
        </h2>
        <p className="mt-4 max-w-xl text-base leading-[1.6] text-muted sm:text-lg">
          Me mande um e-mail ou baixe o currículo. O código está no GitHub.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={contact.mailto} className="w-full sm:w-auto">
            <HiMail size={18} aria-hidden /> {contact.email}
          </Button>
          <Button href={contact.github} variant="secondary" external className="w-full sm:w-auto">
            <FaGithub size={18} aria-hidden /> GitHub
            <span className="sr-only"> (abre em nova aba)</span>
          </Button>
          <Button href={cvUrl} variant="secondary" download className="w-full sm:w-auto">
            <HiDownload size={18} aria-hidden /> Baixar currículo (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}
