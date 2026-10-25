import type { ReactNode } from 'react';

/** Pílula de tecnologia usada em projetos e skills. */
export default function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="border border-line bg-raised px-2.5 py-1 font-mono text-xs text-ink">{children}</li>
  );
}
