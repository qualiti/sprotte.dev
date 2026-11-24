import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ArrowLeft, Flag, Mail } from 'lucide-react';
import { locales, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import {
  APP_NAME,
  APP_SHORT_NAME,
  APP_SLUG,
  getBlockerIndicatorCopy,
  type AppPageKey,
} from '@/i18n/apps/blocker-indicator';
import { Github, Linkedin } from '@/app/BrandIcons';
import { LanguageSwitch } from '@/app/LanguageSwitch';
import { mailto, profile } from '@/app/content';

const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', href: profile.github, icon: Github },
];

export const pagePaths: Record<AppPageKey, string> = {
  overview: APP_SLUG,
  docs: `${APP_SLUG}/docs`,
  support: `${APP_SLUG}/support`,
  privacy: `${APP_SLUG}/privacy`,
  terms: `${APP_SLUG}/terms`,
};

export function buildBlockerIndicatorMetadata(lang: Locale, page: AppPageKey): Metadata {
  const dict = getDictionary(lang);
  const copy = getBlockerIndicatorCopy(lang);
  const meta = copy.meta[page];
  const subpath = pagePaths[page];

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}${subpath}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}${subpath}`])),
        'x-default': `/en${subpath}`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: dict.meta.ogLocale,
      url: `/${lang}${subpath}`,
    },
  };
}

export function AppShell({
  lang,
  activePage,
  children,
}: {
  lang: Locale;
  activePage: AppPageKey;
  children: ReactNode;
}) {
  const dict = getDictionary(lang);
  const copy = getBlockerIndicatorCopy(lang);
  const subpath = pagePaths[activePage];

  const navItems: { key: AppPageKey; href: string; label: string }[] = [
    { key: 'overview', href: `/${lang}${pagePaths.overview}`, label: copy.nav.overview },
    { key: 'docs', href: `/${lang}${pagePaths.docs}`, label: copy.nav.docs },
    { key: 'support', href: `/${lang}${pagePaths.support}`, label: copy.nav.support },
    { key: 'privacy', href: `/${lang}${pagePaths.privacy}`, label: copy.nav.privacy },
    { key: 'terms', href: `/${lang}${pagePaths.terms}`, label: copy.nav.terms },
  ];

  const navLink = (item: (typeof navItems)[number]) => {
    const isActive = item.key === activePage;
    return (
      <a
        href={item.href}
        aria-current={isActive ? 'page' : undefined}
        className={`grid h-8 place-items-center rounded-full px-3 whitespace-nowrap transition ${
          isActive
            ? 'bg-white text-(--au-ink) shadow-[0_1px_2px_rgb(11_18_32/0.08),0_0_0_1px_rgb(11_18_32/0.06)]'
            : 'text-(--au-muted) hover:text-(--au-ink)'
        }`}
      >
        {item.label}
      </a>
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-(--au-line) bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <a
              href={`/${lang}`}
              title={copy.nav.backHome}
              className="au-display flex shrink-0 items-center gap-2 text-lg font-semibold"
            >
              <span className="grid size-7 place-items-center rounded-lg bg-(--au-ink) text-xs text-white">
                TS
              </span>
              <span className="hidden lg:inline">sprotte.dev</span>
            </a>
            <span className="text-lg font-light text-(--au-ink)/20" aria-hidden>
              /
            </span>
            <a
              href={`/${lang}${APP_SLUG}`}
              className="au-display flex min-w-0 items-center gap-2 text-[0.95rem] font-semibold"
            >
              <AppMark />
              <span className="truncate">{APP_SHORT_NAME}</span>
            </a>
          </div>

          <nav aria-label={copy.nav.label} className="hidden md:block">
            <ul className="flex items-center gap-0.5 rounded-full border border-(--au-line) bg-(--au-soft) p-0.5 text-[0.8rem] font-semibold">
              {navItems.map((item) => (
                <li key={item.key}>{navLink(item)}</li>
              ))}
            </ul>
          </nav>

          <LanguageSwitch current={lang} label={dict.languageSwitch} path={subpath} />
        </div>

        {/* Mobile sub-navigation */}
        <nav
          aria-label={copy.nav.label}
          className="border-t border-(--au-line) px-3 py-2 md:hidden"
        >
          <ul className="flex items-center gap-0.5 overflow-x-auto rounded-full border border-(--au-line) bg-(--au-soft) p-0.5 text-xs font-semibold [scrollbar-width:none]">
            {navItems.map((item) => (
              <li key={item.key} className="flex-1">
                {navLink(item)}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-(--au-line) bg-(--au-soft)">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <a
                href={`/${lang}${APP_SLUG}`}
                className="au-display inline-flex items-center gap-2.5 text-lg font-semibold"
              >
                <AppMark size="lg" />
                {APP_NAME}
              </a>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-(--au-muted)">
                {copy.overview.subtitle}
              </p>
              <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-(--au-line) bg-white px-3 py-1 text-xs font-semibold text-(--au-ink)/80">
                <span className="size-1.5 rounded-full bg-[#22b07d]" aria-hidden />
                {copy.appBadge}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.1em] text-(--au-muted) uppercase">
                {copy.common.documentLabel}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navItems.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      aria-current={item.key === activePage ? 'page' : undefined}
                      className="text-(--au-ink)/75 transition hover:text-(--au-ink) aria-[current=page]:font-semibold aria-[current=page]:text-(--au-ink)"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.1em] text-(--au-muted) uppercase">
                {copy.nav.support}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href={mailto(copy.common.emailSupportSubject)}
                    className="inline-flex items-center gap-1.5 text-(--au-ink)/75 transition hover:text-(--au-ink)"
                  >
                    <Mail className="size-3.5" />
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`/${lang}`}
                    className="group inline-flex items-center gap-1.5 text-(--au-ink)/75 transition hover:text-(--au-ink)"
                  >
                    <ArrowLeft className="size-3.5 transition group-hover:-translate-x-0.5" />
                    {copy.nav.backHome}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-(--au-line) pt-6 text-sm text-(--au-muted) sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {profile.company} · {dict.footer.location}
            </p>
            <div className="flex items-center gap-5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-(--au-ink)"
                >
                  <Icon className="size-4.5" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** Small product glyph: warm amber/red blocker flag mark matching Jira's flagged state. */
export function AppMark({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const box = size === 'lg' ? 'size-8 rounded-[10px]' : 'size-7 rounded-lg';
  const icon = size === 'lg' ? 'size-4' : 'size-3.5';
  return (
    <span
      aria-hidden
      className={`grid shrink-0 place-items-center bg-linear-to-br from-[#fff3d6] to-[#ffe4e0] text-[#c2412d] ring-1 ring-[#ef5b4b]/20 ${box}`}
    >
      <Flag className={`${icon} fill-[#ef5b4b]/25`} />
    </span>
  );
}
