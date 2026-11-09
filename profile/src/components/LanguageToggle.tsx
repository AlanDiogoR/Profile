import { hrefForLocale, localePath } from '../i18n/sections';
import { rememberLocale, type StoredLocale } from '../i18n/preference';
import { useI18n } from '../i18n/context';

const options: { locale: StoredLocale; hrefLang: 'en' | 'pt-BR'; lang: 'en' | 'pt-BR'; label: string; name: string }[] = [
  { locale: 'en', hrefLang: 'en', lang: 'en', label: 'EN', name: 'English' },
  { locale: 'pt', hrefLang: 'pt-BR', lang: 'pt-BR', label: 'PT', name: 'Português' },
];

export default function LanguageToggle() {
  const { locale, header } = useI18n();

  return (
    <nav aria-label={header.languages}>
      <ul className="flex h-11 items-stretch border border-line text-sm font-semibold">
        {options.map((option, index) => {
          const current = option.locale === locale;
          return (
            <li key={option.locale} className="flex items-stretch">
              {index > 0 && (
                <span aria-hidden className="flex items-center text-muted">
                  |
                </span>
              )}
              <a
                href={localePath(option.locale)}
                hrefLang={option.hrefLang}
                lang={option.lang}
                aria-current={current ? 'page' : undefined}
                onClick={(event) => {
                  rememberLocale(option.locale);
                  if (
                    event.defaultPrevented ||
                    event.button !== 0 ||
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.altKey
                  ) {
                    return;
                  }
                  const next = hrefForLocale(option.locale);
                  if (next === localePath(option.locale)) return;
                  event.preventDefault();
                  window.location.assign(next);
                }}
                className={`inline-flex h-11 min-w-11 items-center justify-center px-2.5 transition-colors duration-[220ms] ease-out hover:text-ink ${
                  current ? 'bg-raised text-ink' : 'text-muted'
                }`}
              >
                {option.label}
                <span className="sr-only">, {option.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
