import { contact, portfolioRepoUrl } from '../data/contact';

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
        <p className="font-display text-base font-bold text-ink">Alan Diogo</p>
        <p>© {new Date().getFullYear()} Alan Diogo. Todos os direitos reservados.</p>
        <nav aria-label="Contato e código" className="flex flex-wrap items-center gap-x-5">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link inline-flex min-h-[44px] items-center hover:text-ink"
          >
            LinkedIn
            <span className="sr-only"> de Alan Diogo (abre em nova aba)</span>
          </a>
          <a
            href={portfolioRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link inline-flex min-h-[44px] items-center hover:text-ink"
          >
            Código deste site
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
