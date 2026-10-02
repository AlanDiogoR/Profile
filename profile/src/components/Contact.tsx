import { FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Button from './Button';
import { contact } from '../data/contact';
import { WHATSAPP_DISPLAY } from '../config';
import { socialIconMap } from '../utils/socialIcons';

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="scroll-mt-16 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="contato-titulo" className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Vamos conversar sobre o seu projeto?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
          Me chame no WhatsApp com o que você precisa. Respondo com escopo, prazo e valor por escrito.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={contact.whatsappGeneral} external>
            <FaWhatsapp size={18} aria-hidden /> Chamar no WhatsApp
          </Button>
          <Button href={contact.mailto} variant="secondary">
            <HiMail size={18} aria-hidden /> {contact.email}
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted">WhatsApp: {WHATSAPP_DISPLAY}</p>

        <ul className="mt-10 flex items-center justify-center gap-2">
          {contact.links.map(({ name, url, icon }) => {
            const Icon = socialIconMap[icon];
            return (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} (abre em nova aba)`}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:text-ink"
                >
                  <Icon size={20} aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
