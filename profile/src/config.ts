/** URL canônica do site (sitemap, Open Graph, hreflang e JSON-LD). */
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alandiogo.vercel.app';

export const siteUrl = rawSiteUrl.replace(/\/+$/, '');

export const personName = 'Alan Diogo';

export function absoluteUrl(path: '/' | '/pt' = '/'): string {
  return path === '/' ? siteUrl : `${siteUrl}${path}`;
}

/** PDFs servidos de /public/cv. O arquivo antigo /cv/alan-diogo-cv.pdf aponta para a versão em português. */
export const cvFile = {
  en: { href: '/cv/alan-diogo-cv-en.pdf', download: 'alan-diogo-cv-en.pdf' },
  pt: { href: '/cv/alan-diogo-cv-pt.pdf', download: 'alan-diogo-cv-pt.pdf' },
} as const;
