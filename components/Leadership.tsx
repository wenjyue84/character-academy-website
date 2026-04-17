import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SectionHeading } from './SectionHeading';

const otherImages = [
  '/images/team/seaqin-teo.jpg',
  '/images/team/may-liau.jpg',
];

type TimelineItem = { years: string; role: string };
type GuestItem = { year: string; note: string };
type TeamItem = { name: string; role: string; body: string };

export function Leadership() {
  const t = useTranslations('leadership');
  const timeline = t.raw('jennifer.timeline') as TimelineItem[];
  const guest = t.raw('jennifer.guest') as GuestItem[];
  const others = t.raw('others') as TeamItem[];

  return (
    <section id="team" className="relative bg-sand/50 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
        />

        {/* Jennifer Tan — main card */}
        <div className="reveal mt-14 overflow-hidden rounded-xl bg-white shadow-lift ring-1 ring-slate-200">
          <div className="grid gap-0 md:grid-cols-[1fr_1.3fr]">
            <div className="relative aspect-[3/4] bg-sand md:aspect-auto">
              <Image
                src="/images/team/jennifer-tan.jpg"
                alt="Jennifer Tan, Founder and Group Leader of Character International Academy"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
              {/* Warm duotone overlay for cohesion */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-gold/10 mix-blend-multiply"
              />
            </div>
            <div className="relative p-8 md:p-10">
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold via-gold-light to-gold-dark md:block"
              />
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-gold-dark">
                <span className="rule-gold" aria-hidden /> {t('jennifer.role')}
              </p>
              <h3 className="mt-2 font-display text-3xl tracking-display text-navy">
                {t('jennifer.name')}
              </h3>
              <p className="mt-4 text-slate-700">
                {t('jennifer.bio')}
              </p>

              <ol className="mt-7 border-l-2 border-gold/40 pl-6">
                {timeline.map((item) => (
                  <li key={item.role} className="group relative pb-4 last:pb-0">
                    <span className="absolute -left-[1.8rem] top-2 grid h-4 w-4 place-items-center">
                      <span className="h-2 w-2 rounded-full bg-gold ring-4 ring-gold/20 transition-all group-hover:scale-125 group-hover:ring-gold/40" />
                    </span>
                    <span className="font-display text-lg tracking-display text-navy">
                      {item.years}
                    </span>
                    <span className="ml-2 text-slate-600">{item.role}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 rounded-md border border-gold/25 bg-gradient-to-br from-gold/5 to-transparent p-4">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.24em] text-gold-dark">
                  {t('jennifer.guestLabel')}
                </p>
                {guest.map((g) => (
                  <p key={g.year} className="text-sm text-slate-700">
                    <span className="font-display text-base tracking-display text-gold-dark">
                      {g.year}
                    </span>{' '}
                    — {g.note}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="reveal-stagger mt-10 grid gap-8 md:grid-cols-2">
          {others.map((p, i) => (
            <div
              key={p.name}
              className="reveal card-hover group overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-slate-200 hover:shadow-lift"
            >
              <div className="flex gap-5 p-6 md:p-7">
                <div className="image-frame relative h-24 w-24 flex-none overflow-hidden rounded-md bg-sand">
                  <Image
                    src={otherImages[i]}
                    alt={`${p.name}, ${p.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="96px"
                  />
                </div>
                <div>
                  <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-gold-dark">
                    <span className="inline-block h-px w-4 bg-gold/60" /> {p.role}
                  </p>
                  <h4 className="mt-1 font-display text-xl tracking-display text-navy">
                    {p.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
