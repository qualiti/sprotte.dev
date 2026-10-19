import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Funnel_Display, Funnel_Sans } from 'next/font/google';
import { isLocale, locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import '../globals.css';

const display = Funnel_Display({
  subsets: ['latin'],
  variable: '--font-au-display',
});

const sans = Funnel_Sans({
  subsets: ['latin'],
  variable: '--font-au-sans',
});

// Only /en and /de exist; any other first segment is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  return {
    metadataBase: new URL('https://sprotte.dev'),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      // Tells search engines both pages are the same content, so each language ranks on its own.
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}`])),
        'x-default': '/',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: dict.meta.ogLocale,
      url: `/${lang}`,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${display.variable} ${sans.variable} scroll-smooth`}>
      <body className="relative z-0 min-h-screen">{children}</body>
    </html>
  );
}
