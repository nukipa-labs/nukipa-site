'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { altLocale, mirrorPath, type Locale } from '@/lib/i18n';
import { getNav } from '@/lib/nav';

interface NavbarProps {
  locale:      Locale;
  currentPath: string;
}

/**
 * Site navigation. Glassmorphism on scroll (Effect 3), locale-aware
 * labels, single inline language toggle between the nav and the CTA.
 * Mobile renders a slide-in drawer.
 */
export function Navbar({ locale, currentPath }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const nav = getNav(locale);
  const homeHref     = locale === 'de' ? '/' : '/en';
  const toggleLabel  = altLocale(locale).toUpperCase();
  const toggleHref   = mirrorPath(currentPath, locale);
  const toggleAria   = locale === 'de'
    ? 'Switch to English'
    : 'Zur deutschen Version wechseln';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    const original = document.body.style.overflow;
    if (drawerOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, [drawerOpen]);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href={homeHref}
          aria-label="Nukipa, Home"
          className="flex items-center text-[color:var(--text-primary)]"
        >
          <Logo height={24} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.primaryNav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="link-underline text-[15px] font-medium text-[color:var(--text-primary)] hover:text-[color:var(--brand-primary)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href={toggleHref}
            aria-label={toggleAria}
            className="link-underline text-[13px] font-medium text-[color:var(--text-secondary)] hover:text-[color:var(--brand-primary)] transition-colors"
          >
            {toggleLabel}
          </Link>
          <Link href={nav.primaryCta.href} className="btn-primary btn-compact">
            {nav.primaryCta.label}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[color:var(--text-primary)] hover:bg-[color:var(--surface-tint)] transition-colors"
          onClick={() => setDrawerOpen(true)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 backdrop-blur-sm"
            style={{ background: 'rgba(31, 39, 50, 0.40)' }}
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-[color:var(--surface-card)] p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <Link
                href={homeHref}
                onClick={() => setDrawerOpen(false)}
                aria-label="Nukipa, Home"
                className="text-[color:var(--text-primary)]"
              >
                <Logo height={22} />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[color:var(--text-primary)] hover:bg-[color:var(--surface-tint)] transition-colors"
                onClick={() => setDrawerOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>

            <Link
              href={nav.primaryCta.href}
              onClick={() => setDrawerOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              {nav.primaryCta.label}
            </Link>

            <nav className="mt-8 flex flex-col gap-1">
              {nav.primaryNav.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="rounded-md px-3 py-3 text-[15px] font-medium text-[color:var(--text-primary)] hover:bg-[color:var(--surface-tint)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-[color:var(--border-default)]">
              <Link
                href={toggleHref}
                onClick={() => setDrawerOpen(false)}
                aria-label={toggleAria}
                className="block rounded-md px-3 py-3 text-[13px] font-medium text-[color:var(--text-secondary)] hover:text-[color:var(--brand-primary)] transition-colors"
              >
                {locale === 'de' ? 'English' : 'Deutsch'} · {toggleLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
