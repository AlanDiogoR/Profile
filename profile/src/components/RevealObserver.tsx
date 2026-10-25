import { useEffect } from 'react';

let revealObserver: IntersectionObserver | null = null;

export function revealSectionNow(id: string) {
  if (!document.documentElement.classList.contains('js-motion')) return;
  const section = document.getElementById(id);
  if (!section) return;
  section.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    revealObserver?.unobserve(el);
    el.style.setProperty('--reveal-i', '0');
    el.classList.add('reveal-now', 'is-in');
  });
}

function revealFromHash() {
  const id = window.location.hash.replace(/^#/, '');
  if (id) revealSectionNow(id);
}

export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('js-motion')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.remove('js-motion');
      return;
    }

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href')?.slice(1);
      if (id) revealSectionNow(id);
    };
    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', revealFromHash);

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!nodes.length) {
      return () => {
        document.removeEventListener('click', onClick);
        window.removeEventListener('hashchange', revealFromHash);
      };
    }

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-in'));
      return () => {
        document.removeEventListener('click', onClick);
        window.removeEventListener('hashchange', revealFromHash);
      };
    }

    let pending: HTMLElement[] = [];
    let scheduled = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          pending.push(entry.target as HTMLElement);
          io.unobserve(entry.target);
        });
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
          const batch = pending;
          pending = [];
          scheduled = false;
          batch.forEach((el, index) => {
            el.style.setProperty('--reveal-i', String(Math.min(index, 4)));
            el.classList.add('is-in');
          });
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    revealObserver = io;
    nodes.forEach((node) => io.observe(node));
    return () => {
      io.disconnect();
      if (revealObserver === io) revealObserver = null;
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', revealFromHash);
    };
  }, []);

  return null;
}
