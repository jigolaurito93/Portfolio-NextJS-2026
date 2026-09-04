import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import ScrollProgress from '@/components/ScrollProgress';

const syne = localFont({
  src: './fonts/syne.woff2',
  variable: '--font-syne',
  display: 'swap',
  weight: '400 800',
});

const outfit = localFont({
  src: './fonts/outfit.woff2',
  variable: '--font-outfit',
  display: 'swap',
  weight: '100 900',
});

const ibmPlexMono = localFont({
  src: [
    { path: './fonts/ibm-plex-mono-400.woff2', weight: '400' },
    { path: './fonts/ibm-plex-mono-500.woff2', weight: '500' },
    { path: './fonts/ibm-plex-mono-600.woff2', weight: '600' },
  ],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://joselaurito.dev'
  ),
  title: {
    default: 'Jose Laurito | MES Operations Data Analyst & Full-Stack Engineer',
    template: '%s | Jose Laurito',
  },
  description:
    'Chicago-based MES Operations Data Analyst at StarPlus Energy and full-stack software engineer. MES support, production data, and web apps.',
  keywords: [
    'Jose Laurito',
    'MES Operations Data Analyst',
    'MES Operations Support',
    'StarPlus Energy',
    'Full-Stack Software Engineer',
    'Manufacturing Execution System',
    'Next.js',
    'Chicago',
  ],
  authors: [{ name: 'Jose Laurito' }],
  creator: 'Jose Laurito',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Jose Laurito | MES Operations Data Analyst & Full-Stack Engineer',
    description:
      'Chicago-based MES Operations Data Analyst at StarPlus Energy and full-stack software engineer. MES support, production data, and web apps.',
    siteName: 'Jose Laurito',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose Laurito | MES Operations Data Analyst & Full-Stack Engineer',
    description:
      'Chicago-based MES Operations Data Analyst at StarPlus Energy and full-stack software engineer.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${outfit.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <div className="grain" aria-hidden />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
