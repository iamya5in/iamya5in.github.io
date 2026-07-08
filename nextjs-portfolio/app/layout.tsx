import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yasin Hosain — Senior Mobile Engineer',
  description:
    'Senior Software Engineer with 8+ years in Android & Flutter development, specializing in FinTech, payment solutions, NFC, and SDK development.',
  keywords: [
    'Android Developer',
    'Flutter Engineer',
    'Mobile Engineer',
    'SDK Developer',
    'FinTech',
    'Yasin Hosain',
    'Samsung Pay SDK',
    'Bangladesh',
  ],
  authors: [{ name: 'Yasin Hosain', url: 'https://github.com/iamya5in' }],
  openGraph: {
    title: 'Yasin Hosain — Senior Mobile Engineer',
    description:
      'Senior Software Engineer with 8+ years in Android & Flutter development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
