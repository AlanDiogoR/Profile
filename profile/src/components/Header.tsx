import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HiMenu, HiX, HiSun, HiMoon, HiMail } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';
import { personName } from '../config';
import { useI18n } from '../i18n/context';
import LanguageToggle from './LanguageToggle';
import { revealRangeTo } from './RevealObserver';

export default function Header() {
  const messages = useI18n();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const assignMenu = useCallback((node: HTMLElement | null) => {
    menuRef.current = node;
    if (node) node.setAttribute('inert', '');
  }, []);
  const [active, setActive] = useState(messages.sections.home);
  const { theme, toggleTheme } = useTheme();
  const themeLabel = !mounted
    ? messages.header.toggleTheme
    : theme === 'dark'
      ? messages.header.themeToLight
      : messages.header.themeToDark;

  const navItems = [
    { id: messages.sections.projects, label: messages.projectsSection.eyebrow },
    { id: messages.sections.about, label: messages.about.eyebrow },
    { id: messages.sections.stack, label: messages.skillsSection.eyebrow },
    { id: messages.sections.contact, label: messages.contactSection.eyebrow },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const ids = [
      messages.sections.home,
      messages.sections.projects,
      messages.sections.about,
      messages.sections.stack,
      messages.sections.contact,
    ];
    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));

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
  }, [messages]);

  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (open) menu.removeAttribute('inert');
    else menu.setAttribute('inert', '');
  }, [open]);

  const navigateFromMenu = (id: string) => {
    const menu = menuRef.current;
    (document.activeElement as HTMLElement | null)?.blur?.();
    setOpen(false);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    if (menu) menu.setAttribute('inert', '');
    revealRangeTo(id);
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' });
      const hash = `#${id}`;
      if (window.location.hash !== hash) history.pushState(null, '', hash);
    });
  };

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
      <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href={`#${messages.sections.home}`} className="flex min-h-[44px] min-w-0 items-center gap-2.5">
          <span className="sr-only">AD, {personName}</span>
          <span aria-hidden className="grid h-8 w-8 shrink-0 place-items-center border border-line bg-surface font-display text-xs font-bold">
            <span className="border-l-2 border-brand pl-1">AD</span>
          </span>
          <span aria-hidden className="hidden truncate font-display text-base font-bold tracking-tight sm:inline">
            {personName}
          </span>
        </a>

        <nav aria-label={messages.header.mainNav} className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              onClick={() => revealRangeTo(item.id)}
              className="nav-link inline-flex min-h-[44px] items-center text-sm text-muted transition-colors duration-[220ms] ease-out hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <LanguageToggle />
          <a
            href={`#${messages.sections.contact}`}
            aria-label={messages.header.contact}
            className="inline-flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors duration-[220ms] ease-out hover:border-brand md:hidden"
          >
            <HiMail size={18} aria-hidden />
          </a>
          <a
            href={`#${messages.sections.contact}`}
            className="hidden h-11 items-center border border-line px-4 text-sm font-semibold text-ink transition-colors duration-[220ms] ease-out hover:border-brand md:inline-flex"
          >
            {messages.header.contact}
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            className="flex h-11 w-11 items-center justify-center text-muted transition-colors duration-[220ms] ease-out hover:bg-raised hover:text-ink"
          >
            {!mounted || theme === 'dark' ? <HiSun size={20} aria-hidden /> : <HiMoon size={20} aria-hidden />}
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center transition-colors duration-[220ms] ease-out hover:bg-raised md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? messages.header.closeMenu : messages.header.openMenu}
          >
            {open ? <HiX size={22} aria-hidden /> : <HiMenu size={22} aria-hidden />}
          </button>
        </div>
      </div>

      <nav
        ref={assignMenu}
        id="menu-mobile"
        aria-label={messages.header.mobileNav}
        aria-hidden={open ? undefined : true}
        className={`mobile-nav absolute inset-x-0 top-full border-b border-line bg-bg md:hidden ${open ? 'is-open' : ''}`}
      >
        <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  navigateFromMenu(item.id);
                }}
                className="flex min-h-[44px] items-center text-base text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
