'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#how', label: 'How we work' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-navy font-display text-lg font-bold text-gold">
            C
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight text-navy">
              Character Academy
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              International · Since 2002
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-700 transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/60126111677"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-navy-dark"
          >
            WhatsApp us
          </a>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1F2A44" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-cream md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-slate-700"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/60126111677"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-navy px-4 py-3 text-center text-sm font-medium text-cream"
            >
              WhatsApp us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
