import type { Metadata } from 'next';
import { Teko, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const teko = Teko({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-teko',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
});

export const metadata: Metadata = {
  title: 'sprotte.dev | Software Engineer',
  description: 'Tony Sprotte - Full Stack Software Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${teko.variable} ${plexMono.variable} scroll-smooth`}>
      <body className="antialiased bg-black text-white font-mono selection:bg-orange-600 selection:text-white relative">
        <div
          className="fixed inset-0 pointer-events-none z-[-1] opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        ></div>
        {children}
      </body>
    </html>
  );
}
