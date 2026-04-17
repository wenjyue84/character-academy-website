import { useTranslations } from 'next-intl';
import { SectionHeading } from './SectionHeading';

type PlanItem = {
  badge: string;
  title: string;
  body: string;
  bullets: string[];
};

export function BusinessPlan() {
  const t = useTranslations('plan');
  const plans = t.raw('items') as PlanItem[];

  return (
    <section id="plan" className="bg-sand/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          lead={t('lead')}
        />

        <div className="reveal-stagger mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => {
            const badgeStyles = [
              'bg-gold text-navy',
              'bg-navy text-gold',
              'border border-gold/50 bg-transparent text-gold-dark',
            ];
            const accentStyles = [
              'from-gold via-gold-light to-gold-dark',
              'from-navy via-navy-dark to-navy',
              'from-gold/40 via-gold/20 to-transparent',
            ];
            return (
              <article
                key={p.title}
                className="reveal card-hover group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-7 shadow-soft hover:shadow-lift"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[3rem] font-semibold leading-none tracking-display text-gold/30 transition-colors group-hover:text-gold/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-widest shadow-sm ${badgeStyles[i]}`}
                  >
                    {p.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug tracking-display text-navy">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-700">
                  {p.body}
                </p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <span
                  aria-hidden
                  className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-75 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 ${accentStyles[i]}`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
