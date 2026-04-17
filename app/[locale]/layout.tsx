import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

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

const BASE = 'https://character-academy.vercel.app';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const localePath = locale === routing.defaultLocale ? '' : `/${locale}`;

  return {
    metadataBase: new URL(BASE),
    title: {
      default: t('title'),
      template: t('titleTemplate'),
    },
    description: t('description'),
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
      canonical: localePath || '/',
      languages: {
        'en-MY': '/',
        'ms-MY': '/ms',
        'zh-Hans-MY': '/zh',
        'x-default': '/',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      type: 'website',
      url: localePath || '/',
      siteName: 'Character International Academy',
      locale:
        locale === 'ms' ? 'ms_MY' : locale === 'zh' ? 'zh_MY' : 'en_MY',
      alternateLocale:
        locale === 'en'
          ? ['ms_MY', 'zh_MY']
          : locale === 'ms'
          ? ['en_MY', 'zh_MY']
          : ['en_MY', 'ms_MY'],
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
      description: t('twitterDescription'),
      images: ['/images/hero/cover.jpg'],
    },
    icons: {
      icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
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
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const htmlLang =
    locale === 'ms' ? 'ms-MY' : locale === 'zh' ? 'zh-Hans-MY' : 'en-MY';

  return (
    <html lang={htmlLang} className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-slate-800 antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
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
