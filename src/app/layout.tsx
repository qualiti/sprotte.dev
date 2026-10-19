import type { Metadata } from 'next';
import { Funnel_Display, Funnel_Sans } from 'next/font/google';
import { profile } from './content';
import './globals.css';

const display = Funnel_Display({
  subsets: ['latin'],
  variable: '--font-au-display',
});

const sans = Funnel_Sans({
  subsets: ['latin'],
  variable: '--font-au-sans',
});

export const metadata: Metadata = {
  title: 'sprotte.dev | Software Engineer',
  description: `${profile.name} - ${profile.role} from ${profile.location}. Web applications, automations and integrations.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} scroll-smooth`}>
      <body className="relative z-0 min-h-screen">{children}</body>
    </html>
  );
}
