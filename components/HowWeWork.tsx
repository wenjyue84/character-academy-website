import { useTranslations } from 'next-intl';
import { SectionHeading } from './SectionHeading';

export function HowWeWork() {
  const t = useTranslations('how');
  const steps = t.raw('steps') as { title: string; body: string }[];

  return (
    <section id="how" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          lead={t('lead')}
        />

        <ol className="reveal-stagger mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="reveal card-hover group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-soft hover:shadow-lift md:p-7"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold/0 via-gold to-gold/0 transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[3rem] font-semibold leading-none text-gold/40 transition-colors group-hover:text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl leading-snug tracking-display text-navy">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 pl-[4rem] text-[0.98rem] leading-relaxed text-slate-700">
                {s.body}
              </p>
              <span
                aria-hidden
                className="absolute bottom-4 right-5 text-gold/0 transition-all duration-300 group-hover:text-gold group-hover:translate-x-0.5"
              >
                →
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
