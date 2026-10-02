import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors min-h-[44px]';
const variants: Record<Variant, string> = {
  primary: 'bg-brand text-on-brand hover:brightness-110',
  secondary: 'border border-line text-ink hover:bg-raised',
};

interface Props {
  href: string;
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Button({ href, variant = 'primary', external, children, className = '' }: Props) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
