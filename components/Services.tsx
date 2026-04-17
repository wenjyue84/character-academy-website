import Image from 'next/image';
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
    <section id="services" className="bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="reveal max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold-light">
            Our services
          </p>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">
            Two kinds of people come to us. We built a service line for each.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Corporate */}
          <div className="reveal rounded-lg border border-cream/10 bg-navy-dark/60 p-7 md:p-9">
            <div className="flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-gold font-display text-xl font-semibold text-navy">
                C
              </div>
              <h3 className="font-display text-2xl">For organisations</h3>
            </div>
            <p className="mt-4 text-cream/70">
              Structured advisory and implementation services to build sustainable workforce
              development systems.
            </p>
            <ul className="mt-6 grid gap-5">
              {corporate.map((s) => (
                <li key={s.title}>
                  <p className="font-display text-[1.05rem] text-gold-light">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-cream/70">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Individual */}
          <div className="reveal rounded-lg border border-cream/10 bg-navy-dark/60 p-7 md:p-9">
            <div className="flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-gold font-display text-xl font-semibold text-navy">
                I
              </div>
              <h3 className="font-display text-2xl">For individuals</h3>
            </div>
            <p className="mt-4 text-cream/70">
              Pathways for professionals to build recognised credentials and move their career
              forward.
            </p>
            <ul className="mt-6 grid gap-5">
              {individual.map((s) => (
                <li key={s.title}>
                  <p className="font-display text-[1.05rem] text-gold-light">{s.title}</p>
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
