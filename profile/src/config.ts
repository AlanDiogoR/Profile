/** URL base do site (sitemap, OG, canonical). Configure NEXT_PUBLIC_SITE_URL na Vercel se mudar o domínio. */
export const siteUrl = (
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SITE_URL) ||
  'https://profile-peach-one-26.vercel.app'
).replace(/\/$/, '');

/** Número oficial de WhatsApp (formato internacional, só dígitos). ÚNICA fonte de verdade. */
export const WHATSAPP_NUMBER = '5514998931883';
export const WHATSAPP_DISPLAY = '+55 (14) 99893-1883';

/** Monta o link wa.me com mensagem pré-preenchida. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
