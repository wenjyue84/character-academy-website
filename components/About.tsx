import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SectionHeading } from './SectionHeading';

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div className="reveal relative">
          {/* Warm mat */}
          <div
            aria-hidden
            className="absolute -left-3 -top-3 h-full w-full rounded-xl border border-gold/30"
          />
          <div className="image-frame relative aspect-[3/4] overflow-hidden rounded-xl bg-sand shadow-lift">
            <Image
              src="/images/sections/about-company.jpg"
              alt="Character Academy training room"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 overflow-hidden rounded-md bg-cream px-5 py-4 shadow-lift ring-1 ring-slate-200">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold-dark"
            />
            <p className="font-display text-3xl font-semibold tracking-display text-navy">
              {t('statBig')}
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              {t('statSmall')}
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
          />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 md:text-[1.05rem]">
            <p>
              {t('p1Before')}<span className="font-display">名门全能美学职业培训学院</span>{t('p1After')}
            </p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
