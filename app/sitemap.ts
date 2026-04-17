import type { MetadataRoute } from 'next';

const BASE = 'https://character-academy.vercel.app';

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
  return sections.map((hash, i) => ({
    url: `${BASE}/${hash}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: i === 0 ? 1 : 0.7,
  }));
}
