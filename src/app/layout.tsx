import {
  Inter,
  Inter_Tight,
  Playfair_Display,
  Source_Sans_3,
} from 'next/font/google';

import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

// Restaurant fonts
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Streamline - Modern Next.js Template',
    template: '%s | Streamline',
  },
  description:
    'A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Template',
    'Shadcn/UI',
    'Web Development',
  ],
  authors: [{ name: 'Streamline Team' }],
  creator: 'Streamline Team',
  publisher: 'Streamline',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Streamline - Modern Next.js Template',
    description:
      'A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.',
    siteName: 'Streamline',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Streamline - Modern Next.js Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Streamline - Modern Next.js Template',
    description:
      'A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.',
    images: ['/og-image.jpg'],
    creator: '@streamline',
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
        className={`h-screen ${inter.variable} ${interTight.variable} ${playfairDisplay.variable} ${sourceSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
