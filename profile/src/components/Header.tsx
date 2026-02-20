import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { contact } from '../data/contact';
import { socialIconMap } from '../utils/socialIcons';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'projects', label: 'Projetos' },
  { id: 'contact', label: 'Contato' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-md border-b border-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-semibold text-lg text-[var(--color-text)] hover:text-accent-purple transition-colors focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          onClick={() => scrollTo('hero')}
        >
          Alan Diogo
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors text-sm focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {contact.links.map(({ name, url, icon }) => {
            const Icon = socialIconMap[icon as keyof typeof socialIconMap];
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-[var(--color-text-muted)] hover:text-accent-purple transition-colors p-1 focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <button
          className="md:hidden p-2 text-[var(--color-text)] focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
        >
          <HiMenu size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 bg-dark-950 z-50 md:hidden flex flex-col items-center justify-center gap-8 animate-fade-in-up"
        >
          <button
            className="absolute top-4 right-4 p-2 text-[var(--color-text)] focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
          >
            <HiX size={24} />
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-xl text-[var(--color-text)] hover:text-accent-purple transition-colors focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            >
              {item.label}
            </button>
          ))}
          <div className="flex gap-6">
            {contact.links.map(({ name, url, icon }) => {
              const Icon = socialIconMap[icon as keyof typeof socialIconMap];
              return (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-[var(--color-text-muted)] hover:text-accent-purple transition-colors focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
