import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div className="reveal relative">
          {/* Warm mat */}
          <div
            aria-hidden
            className="absolute -left-3 -top-3 h-full w-full rounded-xl border border-gold/30"
          />
          <div className="image-frame relative aspect-[3/4] overflow-hidden rounded-xl bg-sand shadow-lift">
            <Image
              src="/images/sections/about-company.jpg"
              alt="Character Academy training room"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 overflow-hidden rounded-md bg-cream px-5 py-4 shadow-lift ring-1 ring-slate-200">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold-dark"
            />
            <p className="font-display text-3xl font-semibold tracking-display text-navy">
              20+ years
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              of training experience
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About the academy"
            title="A Malaysian TVET institution built by people who run businesses."
          />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 md:text-[1.05rem]">
            <p>
              Character International Academy Sdn. Bhd. (<span className="font-display">名门全能美学职业培训学院</span>)
              is a professional TVET institution and corporate system development consultancy
              dedicated to national skills certification and structured workforce transformation.
              Our focus is nurturing highly competent professionals with industry-relevant
              technical expertise and strong professional values.
            </p>
            <p>
              We bridge industry needs with structured national skills frameworks. Through active
              industry engagement, we've built strategic partnerships with companies across
              multiple sectors to deliver industry-driven training programmes and apprenticeship
              opportunities that match real workforce demand — not marketing brochures.
            </p>
            <p>
              Our founder saw the same pattern in every business she ran: organisations leaning
              on the memory and instinct of long-serving staff instead of on documented,
              teachable systems. Character Academy was set up to fix that — to bring
              competency-based training into Malaysian workplaces and tie it to a nationally
              recognised certificate, so that skilled work becomes a career, not a guess.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
