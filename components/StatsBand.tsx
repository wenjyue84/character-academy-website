const stats = [
  { value: '4,500+', label: 'Learners certified under SKM · DKM · DLKM' },
  { value: '80+', label: 'Corporate partners in apprenticeship programmes' },
  { value: '24 yrs', label: 'As CEO & COO of Character Education Group' },
  { value: '4', label: 'Branches across Johor and Negeri Sembilan' },
];

export function StatsBand() {
  return (
    <section className="relative overflow-hidden border-y border-navy-dark/40 bg-navy text-cream">
      {/* Subtle grain for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.35] mix-blend-overlay"
      />
      {/* Gold accent top line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <div className="reveal-stagger relative mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-cream/10">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`reveal relative ${i > 0 ? 'md:pl-8' : ''}`}
          >
            <span
              aria-hidden
              className="mb-3 block h-px w-6 bg-gold"
            />
            <p className="font-display text-4xl font-semibold tracking-display text-gold-light md:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
