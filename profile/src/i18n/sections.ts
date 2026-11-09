/**
 * Âncoras por idioma. O toggle traduz o hash na troca de página;
 * a URL pedida continua sendo a que é servida.
 */
export const sectionIds = {
  home: { en: 'top', pt: 'inicio' },
  projects: { en: 'projects', pt: 'projetos' },
  about: { en: 'about', pt: 'sobre' },
  stack: { en: 'stack', pt: 'stack' },
  contact: { en: 'contact', pt: 'contato' },
  content: { en: 'content', pt: 'conteudo' },
} as const;

export type SectionKey = keyof typeof sectionIds;

export function localePath(locale: 'en' | 'pt'): '/' | '/pt' {
  return locale === 'en' ? '/' : '/pt';
}

/** Mantém a seção atual ao trocar de idioma. Só roda no clique, no cliente. */
export function hrefForLocale(locale: 'en' | 'pt'): string {
  const base = localePath(locale);
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash) return base;

  for (const ids of Object.values(sectionIds)) {
    if (ids.en !== hash && ids.pt !== hash) continue;
    if (ids.en === sectionIds.content.en) return base;
    return `${base}#${ids[locale]}`;
  }

  return base;
}
