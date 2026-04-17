import { SectionHeading } from './SectionHeading';

const corporate = [
  { title: 'TVET Skills Training Programmes', body: 'Custom competency-based programmes mapped to NOSS and the SKM/DKM/DLKM framework.' },
  { title: 'ADI-Perantisan Apprenticeship', body: 'End-to-end setup of apprenticeship programmes under the National Dual Training System.' },
  { title: 'Accredited Training Centre Advisory', body: 'Achieve and maintain Pusat Bertauliah accreditation with JPK.' },
  { title: 'Workforce Development Programmes', body: 'Organisation-wide skills roadmaps, competency matrices, and certification pipelines.' },
  { title: 'Competency-Based Implementation', body: 'Hands-on advisory during rollout — not just a plan on paper.' },
  { title: 'Talent Retention Planning', body: 'Link certification and career progression directly to retention outcomes.' },
  { title: 'Corporate Growth Advisory', body: 'Use talent strategy as a lever for business growth, not an HR afterthought.' },
  { title: 'HRD Corp Claimable Training', body: 'Training that employers can claim back under the HRD Corp levy scheme.' },
];

const individual = [
  { title: 'Upskilling Advisory', body: 'Diagnose the skill gap and map the fastest credible path forward.' },
  { title: 'Certification Pathways Guidance', body: 'Pick the right SKM / DKM / DLKM level and the most practical route — training, ADI, or PPT (prior learning).' },
  { title: 'Competency Enhancement Guidance', body: 'One-on-one advisory while you work toward assessment.' },
  { title: 'JPK Accreditation Advisory', body: 'Guidance for professionals who want to become assessors, verifiers (PPL), or industry experts.' },
  { title: 'HRD Corp Trainer Accreditation', body: 'Pass the 5-day TTT programme and the 120-hour accreditation process.' },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-navy text-cream">
      {/* Ambient glow + grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(184,137,74,0.15),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(184,137,74,0.1),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.3] mix-blend-overlay"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="reveal max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-gold-light">
            <span className="rule-gold" aria-hidden /> Our services
          </p>
          <h2 className="font-display text-3xl leading-[1.12] tracking-display md:text-[2.5rem]">
            Two kinds of people come to us. We built a service line for each.
          </h2>
        </div>

        <div className="reveal-stagger mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Corporate */}
          <div className="reveal card-hover group relative overflow-hidden rounded-xl border border-cream/10 bg-gradient-to-br from-navy-dark/70 to-navy/40 p-7 backdrop-blur-sm md:p-9">
            <div className="flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-gradient-to-br from-gold-light to-gold-dark font-display text-xl font-semibold text-navy ring-1 ring-gold/40 shadow-soft">
                C
              </div>
              <h3 className="font-display text-2xl tracking-display">For organisations</h3>
            </div>
            <p className="mt-4 text-cream/70">
              Structured advisory and implementation services to build sustainable workforce
              development systems.
            </p>
            <ul className="mt-6 grid gap-5">
              {corporate.map((s) => (
                <li
                  key={s.title}
                  className="group/item border-l-2 border-transparent pl-3 transition-colors hover:border-gold"
                >
                  <p className="font-display text-[1.05rem] tracking-display text-gold-light">
                    {s.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-cream/70">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Individual */}
          <div className="reveal card-hover group relative overflow-hidden rounded-xl border border-cream/10 bg-gradient-to-br from-navy-dark/70 to-navy/40 p-7 backdrop-blur-sm md:p-9">
            <div className="flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-gradient-to-br from-gold-light to-gold-dark font-display text-xl font-semibold text-navy ring-1 ring-gold/40 shadow-soft">
                I
              </div>
              <h3 className="font-display text-2xl tracking-display">For individuals</h3>
            </div>
            <p className="mt-4 text-cream/70">
              Pathways for professionals to build recognised credentials and move their career
              forward.
            </p>
            <ul className="mt-6 grid gap-5">
              {individual.map((s) => (
                <li
                  key={s.title}
                  className="group/item border-l-2 border-transparent pl-3 transition-colors hover:border-gold"
                >
                  <p className="font-display text-[1.05rem] tracking-display text-gold-light">
                    {s.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-cream/70">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
