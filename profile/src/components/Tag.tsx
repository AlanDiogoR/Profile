import type { ReactNode } from 'react';

/** Pílula de tecnologia usada em projetos e skills. */
export default function Tag({ children }: { children: ReactNode }) {
  return <li className="rounded-md bg-raised px-2.5 py-1 text-xs text-ink">{children}</li>;
}
