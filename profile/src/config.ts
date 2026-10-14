/** URL base do site (sitemap, OG, canonical). Configure NEXT_PUBLIC_SITE_URL na Vercel se mudar o domínio. */
export const siteUrl = (
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SITE_URL) ||
  'https://profile-peach-one-26.vercel.app'
).replace(/\/$/, '');

/** Currículo em PDF servido de /public. */
export const cvUrl = '/cv/alan-diogo-cv.pdf';
