const stats = [
  { value: '4,500+', label: 'Learners certified under SKM · DKM · DLKM' },
  { value: '80+', label: 'Corporate partners in apprenticeship programmes' },
  { value: '24 yrs', label: 'As CEO & COO of Character Education Group' },
  { value: '4', label: 'Branches across Johor and Negeri Sembilan' },
];

export function StatsBand() {
  return (
    <section className="border-y border-slate-200 bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="reveal">
            <p className="font-display text-4xl font-semibold text-gold-light md:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
