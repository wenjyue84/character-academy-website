import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_1fr] md:gap-14">
        <div className="relative z-10 pt-4">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-gold-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> JPK-accredited · since 2002
          </p>
          <h1 className="font-display text-[2.6rem] leading-[1.05] text-navy md:text-6xl">
            Structured skills.
            <br />
            <span className="accent-underline">Recognised</span> by the nation.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700">
            Character International Academy is a Malaysian TVET institution and corporate
            workforce-development consultancy. For more than two decades we've helped over
            <span className="font-semibold text-navy"> 4,500 learners </span>
            earn SKM, DKM and DLKM certification, and worked with
            <span className="font-semibold text-navy"> 80+ companies </span>
            to build training systems that actually stay in place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 font-medium text-cream transition-colors hover:bg-navy-dark"
            >
              Talk to Jennifer
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-navy transition-colors hover:border-navy hover:bg-white"
            >
              See our services
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            HQ No. 82, Jalan Ali, Muar · Branches in Johor Bahru, Kluang &amp; Seremban
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-sand shadow-lg md:translate-y-6">
            <Image
              src="/images/hero/cover.jpg"
              alt="Character Academy training in progress — learners, assessors and workplace partners working together."
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="absolute -left-6 bottom-6 hidden max-w-[18rem] rounded-md bg-navy p-5 text-cream shadow-xl md:block">
            <p className="font-display text-lg leading-snug">
              "Adapting to and embracing change is key to long-term success."
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-gold-light">
              Jennifer Tan — Founder
            </p>
          </div>
        </div>
      </div>

      {/* Decorative deep-navy band */}
      <div className="pointer-events-none absolute -bottom-20 -right-24 h-56 w-[40rem] rotate-[-4deg] bg-navy/5 md:-bottom-32" />
    </section>
  );
}
