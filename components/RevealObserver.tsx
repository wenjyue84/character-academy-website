'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const nodes = document.querySelectorAll<HTMLElement>('.reveal');

    // Reduced-motion users: make everything visible immediately.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((el) => el.classList.add('in'));
      return;
    }

    // Reset any lingering .in state so elements can transition in cleanly
    // after a client-side navigation (e.g. locale switch).
    nodes.forEach((el) => el.classList.remove('in'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    nodes.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
