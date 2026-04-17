import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

const projects = [
  {
    tag: 'Apprenticeship',
    title: 'Industry-Based Apprenticeship Development',
    metric: '80+ companies',
    body:
      "We partnered with more than eighty employers to stand up industry-based apprenticeship programmes aligned with Malaysia's national TVET agenda. Workplace learning was woven together with competency-based classroom training, so apprentices developed skill and context at the same time.",
    outcomes: [
      'Measurably stronger workforce capability',
      'Repeatable structured talent-development system',
      'Tighter operational consistency across teams',
    ],
    image: '/images/sections/project-apprenticeship.jpg',
  },
  {
    tag: 'National Certification',
    title: 'National Skills Certification Pathway',
    metric: '4,500+ learners',
    body:
      "Character Academy's largest and longest-running initiative: helping experienced workers obtain formal recognition of what they already know how to do. Through structured pathways — including Recognition of Prior Achievement (PPT) — workers across multiple sectors earned nationally recognised SKM / DKM / DLKM certificates.",
    outcomes: [
      'Improved employability and upward mobility',
      'Credentials that match existing on-the-job competence',
      "Growth of Malaysia's certified-skilled workforce",
    ],
    image: '/images/sections/market-presence.jpg',
  },
  {
    tag: 'Retention',
    title: 'Corporate Workforce Development & Talent Retention',
    metric: 'Fewer quits. More growth.',
    body:
      'We helped companies design and implement full talent retention systems — not just training, but the connective tissue around it: competency mapping, training-matrix development, and certification-based career-progression planning.',
    outcomes: [
      'Higher employee capability across the board',
      'Greater training consistency between teams and branches',
      'Measurably reduced turnover',
    ],
    image: '/images/sections/how-we-work.png',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Three initiatives that show how the approach holds up in practice."
        />

        <div className="mt-16 space-y-20">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={p.title}
                className="reveal grid items-center gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14"
              >
                <div className={`relative ${reversed ? 'md:order-2' : ''}`}>
                  {/* Gold mat on alternating sides */}
                  <div
                    aria-hidden
                    className={`absolute -z-10 h-full w-full rounded-xl border border-gold/30 ${
                      reversed ? '-right-3 -top-3' : '-left-3 -top-3'
                    }`}
                  />
                  <div className="image-frame relative aspect-[4/3] overflow-hidden rounded-xl bg-sand shadow-lift">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      sizes="(min-width: 768px) 40vw, 100vw"
                    />
                  </div>
                </div>
                <div>
                  <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-gold-dark">
                    <span className="rule-gold" aria-hidden />
                    Project {String(i + 1).padStart(2, '0')} · {p.tag}
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-snug tracking-display text-navy md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-display text-xl italic text-gold-dark">— {p.metric}</p>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-slate-700">{p.body}</p>
                  <ul className="mt-5 space-y-2.5 text-[0.98rem] text-slate-700">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3">
                        <svg
                          aria-hidden
                          className="mt-1 h-4 w-4 flex-none text-gold"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M5 10.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
