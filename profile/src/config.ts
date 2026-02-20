/** URL base do site (para sitemap, OG, etc.). Configure NEXT_PUBLIC_SITE_URL na Vercel. */
export const siteUrl =
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SITE_URL) ||
  'https://alandiogo.vercel.app';
