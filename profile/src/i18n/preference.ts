export const LOCALE_STORAGE_KEY = 'locale';
export const LOCALE_COOKIE = 'locale';

export type StoredLocale = 'en' | 'pt';

/**
 * Guarda a escolha explícita do toggle (cookie + localStorage).
 * Nada neste site lê o valor para redirecionar: nem Accept-Language,
 * nem cookie, nem crawler. A URL pedida é a página servida.
 */
export function rememberLocale(locale: StoredLocale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* modo privado */
  }

  try {
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
  } catch {
    /* cookie bloqueado */
  }
}
