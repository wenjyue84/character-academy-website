'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const labels: Record<string, string> = {
  en: 'EN',
  ms: 'BM',
  zh: '中文',
};

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('language');

  return (
    <nav
      aria-label={t('label')}
      className={`inline-flex items-center gap-0.5 rounded-full border border-slate-200 bg-white/60 px-1 py-0.5 text-xs backdrop-blur ${className}`}
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={pathname}
            locale={l}
            aria-current={active ? 'true' : undefined}
            className={`rounded-full px-2.5 py-1 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 focus-visible:ring-offset-cream ${
              active
                ? 'bg-navy text-gold-light'
                : 'text-slate-600 hover:text-navy'
            }`}
          >
            {labels[l]}
          </Link>
        );
      })}
    </nav>
  );
}
