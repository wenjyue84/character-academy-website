import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SectionHeading } from './SectionHeading';

const images = [
  '/images/sections/project-apprenticeship.jpg',
  '/images/sections/market-presence.jpg',
  '/images/sections/how-we-work.png',
];

type ProjectItem = {
  tag: string;
  title: string;
  metric: string;
  body: string;
  outcomes: string[];
};

export function Projects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as ProjectItem[];

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
        />

        <div className="mt-16 space-y-20">
          {items.map((p, i) => {
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
                      src={images[i]}
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
                    {t('projectLabel')} {String(i + 1).padStart(2, '0')} · {p.tag}
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
