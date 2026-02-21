import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
  /** rootMargin usado em viewports < 768px. Útil para evitar que a margem
   *  negativa impeça a seção de ser detectada em telas pequenas. */
  mobileMargin?: string;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const { once = false, margin = '0px', mobileMargin } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile =
      mobileMargin !== undefined &&
      window.matchMedia('(max-width: 767px)').matches;
    const effectiveMargin = isMobile ? mobileMargin! : margin;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold: 0.1, rootMargin: effectiveMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, margin, mobileMargin]);

  return [ref, isInView] as const;
}
