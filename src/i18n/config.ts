export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];

/** Used when neither the cookie nor the browser's Accept-Language matches a supported locale. */
export const defaultLocale: Locale = 'en';

/** Remembers the visitor's last chosen language, so `/` sends them back to it. */
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const localeNames: Record<Locale, string> = { en: 'English', de: 'Deutsch' };

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
