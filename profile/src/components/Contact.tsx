import { useInView } from '../hooks/useInView';
import { FaWhatsapp } from 'react-icons/fa';
import { contact, portfolioRepoUrl } from '../data/contact';
import { socialIconMap } from '../utils/socialIcons';

export default function Contact() {
  const [ref, isInView] = useInView<HTMLElement>({ once: true, margin: '-100px' });

  const transitionClass = 'transition-all duration-500';
  const visibleClass = isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5';

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4 ${transitionClass} ${visibleClass}`}
        >
          Entre em contato
        </h2>
        <p
          className={`text-[var(--color-text-muted)] text-lg mb-12 max-w-xl mx-auto ${transitionClass} ${visibleClass}`}
          style={isInView ? { transitionDelay: '0.1s' } : {}}
        >
          Entre em contato por qualquer um dos canais abaixo.
        </p>

        <div
          className={`flex flex-wrap justify-center gap-6 mb-12 ${transitionClass} ${visibleClass}`}
          style={isInView ? { transitionDelay: '0.2s' } : {}}
        >
          {contact.links.map(({ name, url, icon }) => {
            const Icon = socialIconMap[icon as keyof typeof socialIconMap];
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-900 border border-dark-800 hover:border-accent-purple/50 hover:text-accent-purple transition-all text-[var(--color-text)] focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Icon size={24} />
                <span>{name}</span>
              </a>
            );
          })}
        </div>

        <div
          className={`space-y-4 mb-8 ${transitionClass} ${visibleClass}`}
          style={isInView ? { transitionDelay: '0.3s' } : {}}
        >
          <a
            href={`tel:${contact.phoneRaw}`}
            className="block text-[var(--color-text-muted)] hover:text-accent-purple transition-colors focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          >
            {contact.phone}
          </a>
          <a
            href={contact.mailto}
            className="block text-[var(--color-text-muted)] hover:text-accent-purple transition-colors focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          >
            {contact.email}
          </a>
        </div>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-8 py-4 bg-accent-purple hover:bg-accent-indigo hover:scale-105 active:scale-95 text-white font-semibold rounded-lg transition-all focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${transitionClass} ${visibleClass}`}
          style={isInView ? { transitionDelay: '0.4s' } : {}}
        >
          <FaWhatsapp size={24} />
          Enviar mensagem
        </a>

        <footer
          className={`mt-20 pt-8 border-t border-dark-800 text-[var(--color-text-muted)] text-sm ${transitionClass} ${visibleClass}`}
          style={isInView ? { transitionDelay: '0.5s' } : {}}
        >
          <a
            href={portfolioRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-purple transition-colors focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          >
            Repositório do portfólio
          </a>
          <p className="mt-2">© {new Date().getFullYear()} Alan Diogo. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
