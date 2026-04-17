import { useTranslations } from 'next-intl';
import { SectionHeading } from './SectionHeading';

export function VisionMission() {
  const t = useTranslations('vision');
  const missionPoints = t.raw('missionPoints') as string[];

  return (
    <section id="vision" className="relative bg-sand/50 py-20 md:py-28">
      {/* Top ornamental divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
        />

        <div className="mt-14 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div className="reveal relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-soft md:p-10">
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold via-gold-light to-gold-dark"
            />
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-gold-dark">
              <span className="rule-gold" aria-hidden /> {t('visionLabel')}
            </p>
            <h3 className="mt-4 font-display text-2xl leading-snug tracking-display text-navy md:text-[1.7rem]">
              {t('visionTitle')}
            </h3>
            <p className="mt-5 text-slate-600">
              {t('visionBody')}
            </p>
          </div>

          <div className="reveal">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-gold-dark">
              <span className="rule-gold" aria-hidden /> {t('missionLabel')}
            </p>
            <ul className="mt-5 space-y-4">
              {missionPoints.map((m, i) => (
                <li
                  key={m}
                  className="group flex gap-4 rounded-md px-2 py-2 transition-colors hover:bg-white"
                >
                  <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-navy font-display text-sm font-semibold text-gold ring-1 ring-gold/30 transition-colors group-hover:bg-navy-dark">
                    {i + 1}
                  </span>
                  <span className="text-[1.02rem] leading-relaxed text-slate-700">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
