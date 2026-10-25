import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('js-motion')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.remove('js-motion');
      return;
    }

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!nodes.length) return;

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-in'));
      return;
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

    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  return null;
}
