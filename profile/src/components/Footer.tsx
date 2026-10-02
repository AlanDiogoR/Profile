import { portfolioRepoUrl } from '../data/contact';

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Alan Diogo. Todos os direitos reservados.</p>
        <a href={portfolioRepoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
          Código deste site
        </a>
      </div>
    </footer>
  );
}
