import { SectionHeading } from './SectionHeading';

const steps = [
  {
    title: 'Industry & Organisational Needs Analysis',
    body:
      "We start on the ground. What does the industry actually demand? What's broken inside this specific organisation — a capability gap, a retention problem, an inconsistent training system? The goal is to match what we build next to real operational needs, not to a brochure.",
  },
  {
    title: 'Standards Alignment',
    body:
      'We map those needs to the National Occupational Skills Standard (NOSS) and the national certification framework (SKM · DKM · DLKM). This turns a custom training plan into a nationally recognised one.',
  },
  {
    title: 'Programme Design',
    body:
      'We design competency-based training pathways — modular, level-appropriate, assessable — so that every learner can demonstrate what they can do, not just what they were taught.',
  },
  {
    title: 'Implementation',
    body:
      "We deliver. Classroom learning is integrated with workplace practice — and, where it fits, with the ADI-Perantisan apprenticeship model (70–80% of the training at the employer's site).",
  },
  {
    title: 'Certification',
    body:
      'We facilitate the formal competency assessment. Successful learners leave with an SKM, DKM, or DLKM issued by JPK under the Ministry of Human Resources.',
  },
  {
    title: 'Continuous Improvement',
    body:
      "We stay with the organisation after the certificate is issued — refining the training system, updating matrices, tracking retention, planning the next certification wave. Skills development is a system, not an event.",
  },
];

export function HowWeWork() {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How we work"
          title="A six-step backbone. Every engagement. No shortcuts."
          lead="Needs → Standards → Programme → Implementation → Certification → Sustainability. Skipping a step is how training ends up not fitting the job."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="reveal relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-7"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl font-semibold text-gold/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl leading-snug text-navy">{s.title}</h3>
              </div>
              <p className="mt-3 pl-[3.75rem] text-[0.98rem] leading-relaxed text-slate-700">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
