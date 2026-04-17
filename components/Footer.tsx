export function Footer() {
  return (
    <footer className="bg-navy-ink text-cream/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gold font-display text-lg font-bold text-navy">
                C
              </span>
              <div>
                <p className="font-display text-lg text-cream">Character Academy</p>
                <p className="text-xs uppercase tracking-[0.18em]">International · Since 2002</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              Character International Academy Sdn. Bhd.
              <br />
              <span className="font-display">名门全能美学职业培训学院</span>
              <br />
              A JPK-accredited TVET institution based in Muar, Johor — serving Malaysia's
              workforce development agenda for more than two decades.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold-light">
              Quick links
            </p>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-cream">About</a></li>
              <li><a href="#how" className="hover:text-cream">How we work</a></li>
              <li><a href="#services" className="hover:text-cream">Services</a></li>
              <li><a href="#projects" className="hover:text-cream">Projects</a></li>
              <li><a href="#team" className="hover:text-cream">Leadership</a></li>
              <li><a href="#contact" className="hover:text-cream">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gold-light">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://wa.me/60126111677" className="hover:text-cream">
                  +6012 6111 677
                </a>
              </li>
              <li>
                <a href="mailto:jennifer@character.com.mx" className="hover:text-cream">
                  jennifer@character.com.mx
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/Character2002"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cream"
                >
                  facebook.com/Character2002
                </a>
              </li>
              <li className="pt-3 text-xs text-cream/50">
                HQ: No. 82, Jalan Ali, 84000 Muar, Johor
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Character International Academy Sdn. Bhd. All rights reserved.</p>
          <p>SKM · DKM · DLKM · HRD Corp Claimable · ADI-Perantisan</p>
        </div>
      </div>
    </footer>
  );
}
