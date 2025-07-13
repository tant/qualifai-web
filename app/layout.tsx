import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import { cn } from '@/lib/utils';
import Header_en from '@/components/Header_en';
import Footer_en from '@/components/Footer_en';
import { GoogleTagManager, GoogleAnalytics  } from '@next/third-parties/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'QualifAI - Intelligent Resume Screening',
  description: 'The AI co-pilot that decodes complex technical roles, eliminates language barriers, and helps you assess global talent with confidence.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-TKM34NF5" />
      <body 
        className={cn(
          'min-h-screen bg-neutral-light font-sans text-neutral-charcoal antialiased',
          inter.variable
        )}
      >
        <Header_en />
        {children}
        <Footer_en />
      </body>
      <GoogleAnalytics gaId="G-B23C6G8HSD" />
    </html>
  );
}
