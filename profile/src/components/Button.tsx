import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

const base =
  'inline-flex min-h-[44px] min-w-0 max-w-full items-center justify-center gap-2 whitespace-normal px-5 py-3 text-center text-sm font-semibold transition-[color,background-color,border-color,filter] duration-[220ms] ease-out';
const variants: Record<Variant, string> = {
  primary: 'bg-brand text-on-brand hover:brightness-110',
  secondary: 'border border-line bg-surface text-ink hover:border-brand',
};

interface Props {
  href: string;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Button({ href, variant = 'primary', external, download, children, className = '' }: Props) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download: 'alan-diogo-cv.pdf' } : {})}
    >
      {children}
    </a>
  );
}
