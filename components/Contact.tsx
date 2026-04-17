import { SectionHeading } from './SectionHeading';

const branches = [
  {
    label: 'HQ Muar',
    address: 'No. 82, Jalan Ali, 84000 Muar, Johor',
    note: 'Primary office · accredited training centre',
  },
  {
    label: 'Johor Bahru',
    address: 'No. 22, Jalan Harimau Tarum, Taman Abad, 80250 Johor Bahru, Johor',
    note: 'Serves JB metropolitan area · southern industrial corridor',
  },
  {
    label: 'Kluang',
    address: 'No. 7, Tkt 1, Jalan Rambutan, 86000 Kluang, Johor',
    note: 'Serves central Johor',
  },
  {
    label: 'Seremban',
    address: 'No. 330 (1F), Jalan Haruan 5/8, Pusat Komersial Oakland II, 70300 Seremban, Negeri Sembilan',
    note: 'Extends our footprint into Negeri Sembilan',
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.2fr] md:gap-14">
        <div>
          <SectionHeading eyebrow="Let's talk" title="Connect with Jennifer directly." />
          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-slate-700">
            Whether you're building a workforce development system from the ground up, moving
            a team toward SKM / DKM / DLKM certification, or exploring HRD Corp claimable
            training — a 20-minute phone call usually tells us both whether we're a fit.
          </p>

          <div className="reveal-stagger mt-8 space-y-4">
            <a
              href="https://wa.me/60126111677"
              target="_blank"
              rel="noreferrer"
              className="reveal group flex items-center gap-5 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lift"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-gold/10 ring-1 ring-gold/30">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-dark" fill="currentColor" aria-hidden>
                  <path d="M20 4.5A10 10 0 0 0 4.5 19L3 21l2.1-1.4A10 10 0 1 0 20 4.5ZM12 19.1a7.1 7.1 0 0 1-3.6-1l-.3-.2-2 .6.6-2-.2-.3A7.1 7.1 0 1 1 12 19.1Zm4-5.3c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.5.7-.7.8-.1.2-.3.2-.5.1-.2-.1-1-.4-1.8-1.2-.7-.6-1.1-1.4-1.2-1.6 0-.2 0-.3.1-.4l.3-.3.2-.3v-.3l-.7-1.6c-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.4 0-.6.3-.2.2-.8.8-.8 2 0 1.2.8 2.3 1 2.5.1.1 1.6 2.5 4 3.5l.8.3c.6.1 1 .1 1.4.1.4-.1 1.3-.5 1.5-1 .2-.6.2-1 .1-1Z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  WhatsApp · preferred
                </p>
                <p className="mt-1 font-display text-xl tracking-display text-navy">+6012 6111 677</p>
              </div>
              <span className="font-display text-gold-dark transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="mailto:jennifer@character.com.mx"
              className="reveal group flex items-center gap-5 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lift"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-gold/10 ring-1 ring-gold/30">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-dark" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</p>
                <p className="mt-1 font-display text-xl tracking-display text-navy">
                  jennifer@character.com.mx
                </p>
              </div>
              <span className="font-display text-gold-dark transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://facebook.com/Character2002"
              target="_blank"
              rel="noreferrer"
              className="reveal group flex items-center gap-5 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lift"
            >
              <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-gold/10 ring-1 ring-gold/30">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-dark" fill="currentColor" aria-hidden>
                  <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.5-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8h4Z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Facebook</p>
                <p className="mt-1 font-display text-xl tracking-display text-navy">
                  facebook.com/Character2002
                </p>
              </div>
              <span className="font-display text-gold-dark transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-gold-dark">
            <span className="rule-gold" aria-hidden /> Our branches
          </p>
          <div className="reveal-stagger space-y-4">
            {branches.map((b) => {
              const isHQ = b.label === 'HQ Muar';
              return (
                <div
                  key={b.address}
                  className={`reveal card-hover relative overflow-hidden rounded-xl border bg-white p-6 shadow-soft hover:shadow-lift ${
                    isHQ ? 'border-gold/40' : 'border-slate-200'
                  }`}
                >
                  {isHQ && (
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold via-gold-light to-gold-dark"
                    />
                  )}
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl tracking-display text-navy">{b.label}</h3>
                    <span
                      className={`text-[10px] uppercase tracking-[0.2em] ${
                        isHQ ? 'rounded-full bg-gold/15 px-2 py-0.5 text-gold-dark' : 'text-slate-400'
                      }`}
                    >
                      {isHQ ? 'Headquarters' : 'Branch'}
                    </span>
                  </div>
                  <address className="mt-2 not-italic text-slate-700">{b.address}</address>
                  <p className="mt-1 text-sm text-slate-500">{b.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
