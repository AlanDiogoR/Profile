import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const { once = false, margin = '0px' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold: 0.1, rootMargin: margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, margin]);

  return [ref, isInView] as const;
}
