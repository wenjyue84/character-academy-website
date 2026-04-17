import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

const timeline = [
  { years: '30 years', role: 'in Corporate Management' },
  { years: '24 years', role: 'as CEO & COO of Character Education Group of Academy' },
  { years: '20 years', role: 'as Managing Director, True Harmony Group of Chain Company' },
  { years: '17 years', role: 'appointed by JPK as Country Industry Expert (Pakar Industri)' },
  { years: '12 years', role: 'appointed by JPK as External Verification Officer (PPL)' },
  { years: '10 years', role: 'accredited by JPK as Panel of Judges (Panel Hakim)' },
  { years: '5 years', role: 'HRD Corp Accredited Train-the-Trainer (TTT)' },
];

const guest = [
  { year: '2022', note: 'Success Story Speaker — JPK "Institutionalise The Enterprise" seminar' },
  { year: '2023', note: 'Success Story Speaker — JPK "Advisory Service Program with Entrepreneurs"' },
];

const others = [
  {
    name: 'SeaQin Teo',
    role: 'Team Leader',
    image: '/images/team/seaqin-teo.jpg',
    body:
      'Guides and empowers the academy\'s training and advisory teams. Day-to-day leadership, cross-team collaboration, performance management, and the continuous improvement loop that keeps our programmes aligned with JPK standards and client outcomes.',
  },
  {
    name: 'May Liau',
    role: 'Area Manager',
    image: '/images/team/may-liau.jpg',
    body:
      'Oversees operations and performance across our four branches. Keeps training quality, operational standards, and service delivery consistent from Muar HQ through Johor Bahru, Kluang and Seremban — and keeps every branch aligned with competency-based training and national certification standards.',
  },
];

export function Leadership() {
  return (
    <section id="team" className="relative bg-sand/50 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Leadership"
          title="Two decades of JPK work, led by an industry practitioner."
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
                <span className="rule-gold" aria-hidden /> Group Leader · Founder
              </p>
              <h3 className="mt-2 font-display text-3xl tracking-display text-navy">
                Jennifer Tan
              </h3>
              <p className="mt-4 text-slate-700">
                Founder of Character International Academy. Thirty years in corporate management
                and two decades running JPK-accredited training work — with a track record that
                the Department of Skills Development has repeatedly drawn on as a public voice
                for Malaysian TVET.
              </p>

              <ol className="mt-7 border-l-2 border-gold/40 pl-6">
                {timeline.map((t) => (
                  <li key={t.role} className="group relative pb-4 last:pb-0">
                    <span className="absolute -left-[1.8rem] top-2 grid h-4 w-4 place-items-center">
                      <span className="h-2 w-2 rounded-full bg-gold ring-4 ring-gold/20 transition-all group-hover:scale-125 group-hover:ring-gold/40" />
                    </span>
                    <span className="font-display text-lg tracking-display text-navy">
                      {t.years}
                    </span>
                    <span className="ml-2 text-slate-600">{t.role}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 rounded-md border border-gold/25 bg-gradient-to-br from-gold/5 to-transparent p-4">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.24em] text-gold-dark">
                  Invited speaker
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
          {others.map((p) => (
            <div
              key={p.name}
              className="reveal card-hover group overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-slate-200 hover:shadow-lift"
            >
              <div className="flex gap-5 p-6 md:p-7">
                <div className="image-frame relative h-24 w-24 flex-none overflow-hidden rounded-md bg-sand">
                  <Image
                    src={p.image}
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
