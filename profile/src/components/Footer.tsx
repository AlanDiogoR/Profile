import { personName } from '../config';
import { contact, portfolioRepoUrl } from '../data/contact';
import { useI18n } from '../i18n/context';

export default function Footer() {
  const { footer } = useI18n();

  return (
    <footer className="border-t border-line px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
        <p className="font-display text-base font-bold text-ink">{personName}</p>
        <p>{footer.rights(new Date().getFullYear())}</p>
        <nav aria-label={footer.nav} className="flex flex-wrap items-center gap-x-5">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link inline-flex min-h-[44px] items-center hover:text-ink"
          >
            LinkedIn
            <span className="sr-only">{footer.linkedinSr}</span>
          </a>
          <a
            href={portfolioRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link inline-flex min-h-[44px] items-center hover:text-ink"
          >
            {footer.source}
            <span className="sr-only">{footer.sourceSr}</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
