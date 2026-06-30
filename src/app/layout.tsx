import type { Metadata } from 'next';
import { Inter, DM_Serif_Display, Instrument_Serif } from 'next/font/google';

import { SkipLink } from '@/components/layout/SkipLink';
import { SchemaOrg } from '@/components/layout/SchemaOrg';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

const { metadata: meta } = SITE_CONFIG;

export const metadata: Metadata = {
  title: {
    template: meta.titleTemplate,
    default: meta.defaultTitle,
  },
  description: meta.defaultDescription,
  metadataBase: new URL(meta.url),
  openGraph: {
    type: 'website',
    locale: meta.locale,
    siteName: meta.siteName,
    title: meta.defaultTitle,
    description: meta.defaultDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: meta.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.defaultTitle,
    description: meta.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex min-h-dvh flex-col bg-bg text-text-main font-sans antialiased">
        <SkipLink />
        <SchemaOrg />
        <Header />
        <main id="main-content" className="flex-1 pt-16 lg:pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
