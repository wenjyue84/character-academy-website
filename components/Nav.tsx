'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Nav() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: t('about') },
    { href: '#how', label: t('how') },
    { href: '#services', label: t('services') },
    { href: '#projects', label: t('projects') },
    { href: '#team', label: t('team') },
    { href: '#contact', label: t('contact') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-cream/85 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
      role="banner"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-500 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          aria-label={t('brandAria')}
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-md bg-navy font-display text-lg font-bold text-gold ring-1 ring-gold/20 transition-shadow group-hover:ring-gold/60">
            C
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-gold opacity-70 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight text-navy">
              {t('brand')}
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
              {t('brandTagline')}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded text-sm text-slate-700 transition-colors hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <LanguageSwitcher className="ml-1" />
          <a
            href="https://wa.me/60126111677"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-medium text-cream shadow-soft transition-all hover:bg-navy-dark hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            {t('whatsapp')}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={open ? t('closeMenu') : t('openMenu')}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-md p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1F2A44" strokeWidth="2" aria-hidden>
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
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-slate-200 bg-cream transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-[80vh] border-t opacity-100' : 'max-h-0 border-t-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded py-3 text-base text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/60126111677"
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full bg-navy px-4 py-3 text-center text-sm font-medium text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            {t('whatsapp')}
          </a>
        </nav>
      </div>
    </header>
  );
}
