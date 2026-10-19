import type { Locale } from '../config';
import { de } from './de';
import { en, type Dictionary } from './en';

export type { Dictionary };

// Page copy for Server Components only, so it never ends up in the client bundle.
// Client components use the smaller chat dictionary in ../chat.ts instead.
const dictionaries: Record<Locale, Dictionary> = { en, de };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
