import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-cream pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Ambient background layers — warm wash + faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,106,0.18),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-faint-grid bg-grid-32 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_1fr] md:gap-14">
        <div className="relative z-10 pt-4">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-dark shadow-sm">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-gold/60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            {t('badge')}
          </p>
          <h1 className="font-display text-[2.6rem] leading-[1.03] tracking-display text-navy md:text-6xl">
            {t('headlineLine1')}
            <br />
            <span className="accent-underline">{t('headlineAccent')}</span>{t('headlineLine2')}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-700">
            {t('leadPrefix')}
            <span className="font-semibold text-navy">{t('leadLearners')}</span>
            {t('leadMid')}
            <span className="font-semibold text-navy">{t('leadCompanies')}</span>
            {t('leadSuffix')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 font-medium text-cream shadow-soft transition-all hover:bg-navy-dark hover:shadow-lift"
            >
              {t('ctaPrimary')}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 font-medium text-navy backdrop-blur transition-all hover:border-navy hover:bg-white hover:shadow-soft"
            >
              {t('ctaSecondary')}
              <span className="text-gold-dark transition-transform group-hover:translate-x-0.5">↘</span>
            </a>
          </div>
          <p className="mt-7 flex items-center gap-3 text-sm text-slate-500">
            <span className="rule-gold" />
            {t('locations')}
          </p>
        </div>

        <div className="relative">
          {/* Warm mat behind image */}
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-gold/15 via-sand/40 to-transparent blur-[2px] md:translate-y-6"
          />
          <div className="image-frame relative aspect-[4/5] overflow-hidden rounded-xl bg-sand shadow-lift md:translate-y-6">
            <Image
              src="/images/hero/cover.jpg"
              alt="Character Academy training in progress — learners, assessors and workplace partners working together."
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            {/* Subtle bottom gradient for depth */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/25 to-transparent"
            />
          </div>
          <div className="absolute -left-6 bottom-6 hidden max-w-[18rem] rounded-md bg-navy p-5 text-cream shadow-xl ring-1 ring-navy-dark md:block">
            <span
              aria-hidden
              className="absolute -top-2 left-5 h-4 w-8 rounded-t-full bg-gold"
            />
            <svg
              aria-hidden
              className="mb-3 h-5 w-5 text-gold"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.17 6C4.86 6 3 7.86 3 10.17V18h7v-7.83H6.5C6.5 8.97 7.47 8 8.67 8H10V6H7.17zm10 0C14.86 6 13 7.86 13 10.17V18h7v-7.83h-3.5c0-1.2.97-2.17 2.17-2.17H20V6h-2.83z" />
            </svg>
            <p className="font-display text-lg leading-snug">
              &ldquo;{t('quote')}&rdquo;
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-gold-light">
              {t('quoteAttribution')}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative deep-navy band */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-24 h-56 w-[40rem] rotate-[-4deg] bg-navy/5 md:-bottom-32"
      />
      {/* Subtle scroll-hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-slate-400 md:block">
        <span className="inline-flex items-center gap-2">
          <span className="h-px w-6 bg-slate-300" /> scroll <span className="h-px w-6 bg-slate-300" />
        </span>
      </div>
    </section>
  );
}
