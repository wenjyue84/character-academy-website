import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const BASE = 'https://character-academy.vercel.app';

function localePath(locale: string) {
  return locale === routing.defaultLocale ? '' : `/${locale}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = [
    '',
    '#about',
    '#how',
    '#services',
    '#projects',
    '#team',
    '#testimonials',
    '#plan',
    '#contact',
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of routing.locales) {
    for (let i = 0; i < sections.length; i++) {
      const hash = sections[i];
      const prefix = localePath(locale);
      entries.push({
        url: `${BASE}${prefix}/${hash}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: i === 0 ? 1 : 0.7,
        alternates: {
          languages: {
            'en-MY': `${BASE}/${hash}`,
            'ms-MY': `${BASE}/ms/${hash}`,
            'zh-Hans-MY': `${BASE}/zh/${hash}`,
            'x-default': `${BASE}/${hash}`,
          },
        },
      });
    }
  }
  return entries;
}
