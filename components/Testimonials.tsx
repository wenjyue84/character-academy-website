import Image from 'next/image';
import { SectionHeading } from './SectionHeading';

const corporate = [
  {
    name: 'Karen Tang',
    role: 'Industry Partner · Skills Development Sector',
    image: '/images/testimonials/karen-tang.png',
    quote:
      "Working with Character Academy has strengthened our organisation's capability in implementing structured skills development. Their expertise in national skills certification and industry-aligned training provided clear direction for our workforce planning. The professional support and collaborative approach have improved employee competency and enhanced overall service quality.",
  },
  {
    name: 'Mr. Tan',
    role: 'CEO, Cottonrose Group · Founder, Supreme Automotive Academy Sdn Bhd',
    image: '/images/testimonials/mr-tan.jpg',
    quote:
      "Character Academy provided structured workforce development solutions that significantly improved our internal training system. Their competency-based approach and guidance on certification pathways helped our employees enhance their skills and performance. We also observed better training consistency and improved team confidence. The collaboration has contributed positively to our operational efficiency and talent development strategy.",
  },
];

const individual = [
  {
    name: 'Min Yew',
    role: 'Professional Hypnotherapist',
    image: '/images/testimonials/min-yew.jpg',
    quote:
      "Character Academy provided me with clear guidance on competency enhancement and certification pathways. Through their structured advisory and skills development support, I was able to strengthen my professional credibility and expand my service offerings. After obtaining the relevant certification, my career progressed rapidly, and I gained greater confidence in positioning myself as a professional hypnotherapist.",
  },
  {
    name: "Dato' Huang",
    role: 'Traditional Chinese Medicine Practitioner',
    image: '/images/testimonials/dato-huang.png',
    quote:
      "Before working with Character Academy, I faced challenges in obtaining proper professional recognition. Their advisory support guided me through the certification process and helped me align my practice with regulatory requirements. With their assistance, I successfully obtained an official practice license issued by the health authority. This transformed my practice from operating in uncertainty into a fully legitimate professional career.",
  },
];

function QuoteCard({
  name,
  role,
  image,
  quote,
}: {
  name: string;
  role: string;
  image: string;
  quote: string;
}) {
  return (
    <figure className="reveal flex flex-col rounded-lg border border-slate-200 bg-white p-7 shadow-sm md:p-8">
      <svg
        className="mb-4 h-7 w-7 text-gold"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M7.17 6C4.86 6 3 7.86 3 10.17V18h7v-7.83H6.5C6.5 8.97 7.47 8 8.67 8H10V6H7.17zm10 0C14.86 6 13 7.86 13 10.17V18h7v-7.83h-3.5c0-1.2.97-2.17 2.17-2.17H20V6h-2.83z" />
      </svg>
      <blockquote className="flex-1 text-[0.98rem] leading-relaxed text-slate-700">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
        <div className="relative h-12 w-12 flex-none overflow-hidden rounded-full bg-sand">
          <Image src={image} alt={name} fill className="object-cover" sizes="48px" />
        </div>
        <div>
          <p className="font-display text-base text-navy">{name}</p>
          <p className="text-xs uppercase tracking-wider text-slate-500">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Client stories"
          title="Full testimonials, as written. Trimmed for nothing."
        />

        <div className="mt-12">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Corporate
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {corporate.map((t) => (
              <QuoteCard key={t.name} {...t} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            Individual
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {individual.map((t) => (
              <QuoteCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
