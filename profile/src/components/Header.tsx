import { useEffect, useState } from 'react';
import { HiMenu, HiX, HiSun, HiMoon, HiMail } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { href: '#projetos', id: 'projetos', label: 'Projetos' },
  { href: '#sobre', id: 'sobre', label: 'Sobre' },
  { href: '#stack', id: 'stack', label: 'Stack' },
  { href: '#contato', id: 'contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState('inicio');
  const { theme, toggleTheme } = useTheme();
  const themeLabel = !mounted
    ? 'Alternar tema'
    : theme === 'dark'
      ? 'Ativar tema claro'
      : 'Ativar tema escuro';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sections = ['inicio', ...navItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#inicio" className="flex min-h-[44px] items-center gap-2.5">
          <span aria-hidden className="grid h-8 w-8 place-items-center border border-line bg-surface font-display text-xs font-bold">
            <span className="border-l-2 border-brand pl-1">AD</span>
          </span>
          <span className="font-display text-base font-bold tracking-tight">Alan Diogo</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.id ? 'true' : undefined}
              className="nav-link inline-flex min-h-[44px] items-center text-sm text-muted hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="#contato"
            aria-label="Falar comigo"
            className="inline-flex h-11 w-11 items-center justify-center border border-line text-ink hover:border-brand md:hidden"
          >
            <HiMail size={18} aria-hidden />
          </a>
          <a
            href="#contato"
            className="hidden h-11 items-center border border-line px-4 text-sm font-semibold text-ink hover:border-brand md:inline-flex"
          >
            Falar comigo
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            className="flex h-11 w-11 items-center justify-center text-muted hover:bg-raised hover:text-ink"
          >
            {!mounted || theme === 'dark' ? <HiSun size={20} aria-hidden /> : <HiMoon size={20} aria-hidden />}
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center hover:bg-raised md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <HiX size={22} aria-hidden /> : <HiMenu size={22} aria-hidden />}
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
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center text-base text-ink"
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
