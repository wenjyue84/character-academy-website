import Image from 'next/image';
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

          <div className="mt-8 space-y-4">
            <a
              href="https://wa.me/60126111677"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  WhatsApp · preferred
                </p>
                <p className="mt-1 font-display text-xl text-navy">+6012 6111 677</p>
              </div>
              <span className="font-display text-gold-dark group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a
              href="mailto:jennifer@character.com.mx"
              className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
                <p className="mt-1 font-display text-xl text-navy">
                  jennifer@character.com.mx
                </p>
              </div>
              <span className="font-display text-gold-dark group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a
              href="https://facebook.com/Character2002"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Facebook</p>
                <p className="mt-1 font-display text-xl text-navy">facebook.com/Character2002</p>
              </div>
              <span className="font-display text-gold-dark group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-gold-dark">
            Our branches
          </p>
          <div className="space-y-4">
            {branches.map((b) => (
              <div
                key={b.address}
                className="reveal rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl text-navy">{b.label}</h3>
                  <span className="text-xs uppercase tracking-wider text-slate-400">
                    {b.label === 'HQ Muar' ? 'Headquarters' : 'Branch'}
                  </span>
                </div>
                <address className="mt-2 not-italic text-slate-700">{b.address}</address>
                <p className="mt-1 text-sm text-slate-500">{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
