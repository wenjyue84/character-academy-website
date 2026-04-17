export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
}) {
  const isCenter = align === 'center';
  return (
    <div className={`reveal ${isCenter ? 'text-center' : ''} max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-gold-dark ${
            isCenter ? 'justify-center' : ''
          }`}
        >
          <span className="rule-gold" aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-[1.12] tracking-display text-navy md:text-[2.5rem]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">{lead}</p>
      )}
    </div>
  );
}
