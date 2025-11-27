import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '局田 萠香 | Portfolio',
  description: 'Moka Tsubota - SaaS Business Development Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className="bg-white text-dark antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
