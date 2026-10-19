import { localeNames, locales, type Locale } from '@/i18n/config';

/** Plain links to the other language; the proxy remembers the choice in a cookie. */
export function LanguageSwitch({ current, label }: { current: Locale; label: string }) {
  return (
    <nav aria-label={label}>
      <ul className="flex rounded-full border border-(--au-line) bg-white/80 p-0.5 text-xs font-semibold">
        {locales.map((locale) => (
          <li key={locale}>
            <a
              href={`/${locale}`}
              hrefLang={locale}
              lang={locale}
              aria-current={locale === current ? 'page' : undefined}
              title={localeNames[locale]}
              className={`grid h-8 min-w-9 place-items-center rounded-full px-2 uppercase transition ${
                locale === current
                  ? 'bg-(--au-ink) text-white'
                  : 'text-(--au-muted) hover:text-(--au-ink)'
              }`}
            >
              {locale}
              <span className="sr-only"> ({localeNames[locale]})</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
