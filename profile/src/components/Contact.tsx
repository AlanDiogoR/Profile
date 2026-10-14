import { FaGithub } from 'react-icons/fa';
import { HiDownload, HiMail } from 'react-icons/hi';
import Button from './Button';
import { contact } from '../data/contact';
import { cvUrl } from '../config';

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="contato-titulo" className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Vamos conversar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
          Estou procurando estágio ou vaga júnior. Me mande um e-mail ou baixe o currículo.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={contact.mailto}>
            <HiMail size={18} aria-hidden /> {contact.email}
          </Button>
          <Button href={cvUrl} variant="secondary" download>
            <HiDownload size={18} aria-hidden /> Baixar currículo (PDF)
          </Button>
          <Button href={contact.github} variant="secondary" external>
            <FaGithub size={18} aria-hidden /> GitHub
            <span className="sr-only"> (abre em nova aba)</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
