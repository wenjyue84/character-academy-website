import { SectionHeading } from './SectionHeading';

export function VisionMission() {
  return (
    <section id="vision" className="bg-sand/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Vision & Mission"
          title="Where we're going, and what we do each week to get there."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div className="reveal rounded-lg border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-dark">
              Vision
            </p>
            <h3 className="mt-3 font-display text-2xl leading-snug text-navy md:text-[1.7rem]">
              Become a leading force in Malaysia's TVET ecosystem — one where industry-driven
              education and structured skills development empower sustainable workforce growth.
            </h3>
            <p className="mt-5 text-slate-600">
              We pursue this through continuous industry collaboration, competency-based training,
              and nationally recognised certification pathways.
            </p>
          </div>

          <div className="reveal">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-dark">
              Mission
            </p>
            <ul className="mt-4 space-y-4">
              {[
                'Provide structured, competency-based training aligned with industry needs.',
                'Support workforce development through systematic skills pathways.',
                'Promote national skills certification (SKM · DKM · DLKM).',
                'Develop competent trainers, assessors, and industry practitioners.',
                'Strengthen collaboration between industry and training institutions.',
              ].map((m, i) => (
                <li key={m} className="flex gap-4">
                  <span className="mt-1 grid h-7 w-7 flex-none place-items-center rounded-full bg-navy font-display text-sm font-semibold text-gold">
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
