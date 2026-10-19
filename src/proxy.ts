import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from './i18n/config';

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Picks the first supported language from a header like `de-DE,de;q=0.9,en;q=0.8`. */
function fromAcceptLanguage(header: string | null): Locale | undefined {
  if (!header) return undefined;
  return header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return { lang: tag.split('-')[0].toLowerCase(), q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter((entry) => entry.q > 0)
    .sort((a, b) => b.q - a.q)
    .map((entry) => entry.lang)
    .find(isLocale);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split('/')[1];

  // A localized URL: serve it and remember the language for the next visit to `/`.
  if (isLocale(segment)) {
    const response = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE)?.value !== segment) {
      response.cookies.set(LOCALE_COOKIE, segment, { maxAge: ONE_YEAR, sameSite: 'lax' });
    }
    return response;
  }

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookie)
    ? cookie
    : (fromAcceptLanguage(request.headers.get('accept-language')) ?? defaultLocale);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  const response = NextResponse.redirect(url);
  // The redirect target depends on these headers, so caches must not share it across visitors.
  response.headers.set('Vary', 'Cookie, Accept-Language');
  return response;
}

export const config = {
  // Everything except Next internals and files with an extension (images, icons, robots.txt…).
  matcher: ['/((?!_next|.*\\..*).*)'],
};
