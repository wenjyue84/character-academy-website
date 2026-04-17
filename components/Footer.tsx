import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tLeadership = useTranslations('leadership');

  const links: [string, string][] = [
    ['#about', tNav('about')],
    ['#how', tNav('how')],
    ['#services', tNav('services')],
    ['#projects', tNav('projects')],
    ['#team', tLeadership('eyebrow')],
    ['#contact', tNav('contact')],
  ];

  return (
    <footer className="relative overflow-hidden bg-navy-ink text-cream/70">
      {/* Subtle grain + gold accent line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.25] mix-blend-overlay"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-gold-light to-gold-dark font-display text-lg font-bold text-navy ring-1 ring-gold/40 shadow-soft">
                C
              </span>
              <div>
                <p className="font-display text-lg tracking-display text-cream">
                  {tNav('brand')}
                </p>
                <p className="text-xs uppercase tracking-[0.2em]">
                  {tNav('brandTagline')}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              {t('brandLine1')}
              <br />
              <span className="font-display tracking-display">名门全能美学职业培训学院</span>
              <br />
              {t('brandLine3')}
            </p>
          </div>

          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-gold-light">
              <span className="inline-block h-px w-4 bg-gold/60" /> {t('quickLinks')}
            </p>
            <ul className="space-y-2 text-sm">
              {links.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 text-cream/70 transition-colors hover:text-gold-light"
                  >
                    <span className="h-px w-2 bg-gold/0 transition-all hover:w-3 group-hover:w-3" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-gold-light">
              <span className="inline-block h-px w-4 bg-gold/60" /> {t('contact')}
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/60126111677"
                  className="text-cream/70 transition-colors hover:text-gold-light"
                >
                  +6012 6111 677
                </a>
              </li>
              <li>
                <a
                  href="mailto:jennifer@character.com.mx"
                  className="text-cream/70 transition-colors hover:text-gold-light"
                >
                  jennifer@character.com.mx
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/Character2002"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/70 transition-colors hover:text-gold-light"
                >
                  facebook.com/Character2002
                </a>
              </li>
              <li className="pt-3 text-xs text-cream/50">
                {t('hq')}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:items-center">
          <p>
            {t('copyright', { year: new Date().getFullYear() })}{' '}
            {t('rights')}
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>SKM</span>
            <span className="text-gold/60">·</span>
            <span>DKM</span>
            <span className="text-gold/60">·</span>
            <span>DLKM</span>
            <span className="text-gold/60">·</span>
            <span>HRD Corp Claimable</span>
            <span className="text-gold/60">·</span>
            <span>ADI-Perantisan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
