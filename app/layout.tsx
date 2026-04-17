import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://character-academy.vercel.app'),
  title: {
    default:
      'Character International Academy — TVET & National Skills Certification in Malaysia',
    template: '%s · Character International Academy',
  },
  description:
    'A JPK-accredited Malaysian TVET institution helping 4,500+ learners earn SKM/DKM/DLKM certification and 80+ companies build structured workforce development. Founded 2002 · HQ Muar, Johor.',
  applicationName: 'Character International Academy',
  authors: [{ name: 'Character International Academy Sdn. Bhd.' }],
  creator: 'Character International Academy Sdn. Bhd.',
  publisher: 'Character International Academy Sdn. Bhd.',
  category: 'education',
  keywords: [
    'TVET Malaysia',
    'SKM certification',
    'DKM Malaysia',
    'DLKM Malaysia',
    'JPK accredited training',
    'NOSS',
    'ADI-Perantisan',
    'apprenticeship Malaysia',
    'HRD Corp claimable training',
    'workforce development Malaysia',
    'Pusat Bertauliah',
    'competency-based training',
    'Johor TVET',
    'Muar training centre',
    'Character International Academy',
    '名门全能美学职业培训学院',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en-MY': '/',
      'ms-MY': '/',
      'zh-Hans-MY': '/',
    },
  },
  openGraph: {
    title: 'Character International Academy — TVET & National Skills Certification',
    description:
      '20+ years of structured, competency-based TVET training across Muar, Johor Bahru, Kluang and Seremban. JPK-accredited · SKM · DKM · DLKM · ADI-Perantisan · HRD Corp claimable.',
    type: 'website',
    url: '/',
    siteName: 'Character International Academy',
    locale: 'en_MY',
    alternateLocale: ['ms_MY', 'zh_MY'],
    images: [
      {
        url: '/images/hero/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Character International Academy — JPK-accredited TVET institution in Malaysia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Character International Academy',
    description:
      'JPK-accredited Malaysian TVET · SKM / DKM / DLKM · ADI-Perantisan · HRD Corp claimable training. Since 2002.',
    images: ['/images/hero/cover.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
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
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-slate-800 antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if (typeof IntersectionObserver === 'undefined') return;
                var io = new IntersectionObserver(function(entries){
                  entries.forEach(function(e){
                    if (e.isIntersecting) {
                      e.target.classList.add('in');
                      io.unobserve(e.target);
                    }
                  });
                }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
                document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
