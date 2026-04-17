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
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-navy md:text-4xl">{title}</h2>
      {lead && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{lead}</p>
      )}
    </div>
  );
}
