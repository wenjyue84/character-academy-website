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
  title: 'Character International Academy — TVET & National Skills Certification in Malaysia',
  description:
    'A JPK-accredited Malaysian TVET institution helping 4,500+ learners earn SKM/DKM/DLKM certification and 80+ companies build structured workforce development. Founded 2002 · HQ Muar, Johor.',
  openGraph: {
    title: 'Character International Academy',
    description:
      '20+ years of structured, competency-based TVET training across Muar, Johor Bahru, Kluang and Seremban.',
    type: 'website',
    locale: 'en_MY',
    images: ['/images/hero/cover.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.svg',
  },
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
