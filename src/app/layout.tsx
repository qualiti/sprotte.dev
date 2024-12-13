import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'sprotte.dev | Software Engineer',
  description: 'Software Engineer based in Hamburg, Germany',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
