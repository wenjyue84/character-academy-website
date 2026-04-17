import { SectionHeading } from './SectionHeading';

const plans = [
  {
    badge: 'Ongoing',
    title: 'Digital TVET & Hybrid Learning Ecosystem',
    body:
      "A hybrid learning layer that combines physical workshops and on-site training with structured online support. Online handles pre-work, reference material, progress tracking, and remote coaching; physical handles hands-on practice and assessment.",
    bullets: [
      'Scale — regional reach without sacrificing assessment integrity',
      'Accessibility — working professionals progress without stepping away from their jobs',
      'Continuity — competency development does not stop when the classroom empties',
    ],
  },
  {
    badge: 'Next',
    title: 'Regional Centres of Excellence',
    body:
      'Specialised Centres of Excellence focused on key industry sectors — acting as hubs for advanced skills development (DKM Level 4, DLKM Level 5, specialist tracks), trainer capacity-building, and sector-level industry collaboration.',
    bullets: [
      'Hubs for advanced DKM / DLKM skills development',
      'Trainer capacity-building for HRD Corp accredited trainers and JPK assessors',
      'Sector-level industry collaboration, not just company-level',
    ],
  },
  {
    badge: 'Horizon',
    title: 'International Collaboration & Talent Mobility',
    body:
      'Partnerships with international training institutions and industry organisations to enable knowledge exchange, raise competency standards, and open cross-border opportunities for certified professionals.',
    bullets: [
      'Knowledge exchange and benchmarking against international best practice',
      'Raise Malaysian competency standards toward international levels',
      "Cross-border opportunities tied to the ASEAN Year of Skills agenda",
    ],
  },
];

export function BusinessPlan() {
  return (
    <section id="plan" className="bg-sand/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Business plan"
          title="Three plans. One direction."
          lead="Make structured skills development more accessible, more specialised, and more internationally connected."
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
