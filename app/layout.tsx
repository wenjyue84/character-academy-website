import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://character-academy.vercel.app'),
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBF8F1' },
    { media: '(prefers-color-scheme: dark)', color: '#1F2A44' },
  ],
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
