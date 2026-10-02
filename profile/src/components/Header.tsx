import { useState } from 'react';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { contact } from '../data/contact';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#timeline', label: 'Trajetória' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const themeLabel = theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro';

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="font-display text-lg font-bold tracking-tight">
          Alan<span className="text-brand">.</span>dev
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-muted transition-colors hover:text-ink"
          >
            {theme === 'dark' ? <HiSun size={20} aria-hidden /> : <HiMoon size={20} aria-hidden />}
          </button>
          <a
            href={contact.whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden min-h-[40px] items-center gap-2 rounded-lg bg-brand px-4 text-sm font-semibold text-on-brand transition hover:brightness-110 md:inline-flex"
          >
            <FaWhatsapp size={16} aria-hidden /> WhatsApp
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <HiX size={24} aria-hidden /> : <HiMenu size={24} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Principal (mobile)" className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
