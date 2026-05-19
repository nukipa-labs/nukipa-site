import Link from 'next/link';
import { Logo } from './Logo';
import { altLocale, mirrorPath, type Locale } from '@/lib/i18n';
import { getNav } from '@/lib/nav';

interface FooterProps {
  locale:      Locale;
  currentPath: string;
}

export function Footer({ locale, currentPath }: FooterProps) {
  const nav         = getNav(locale);
  const homeHref    = locale === 'de' ? '/' : '/en';
  const toggleLabel = altLocale(locale).toUpperCase();
  const toggleHref  = mirrorPath(currentPath, locale);
  const switcherLabel =
    locale === 'de'
      ? `DE ⇄ EN`
      : `DE ⇄ EN`;

  return (
    <footer className="border-t border-[color:var(--border-default)] bg-[color:var(--surface-page)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link
              href={homeHref}
              aria-label="Nukipa, Home"
              className="inline-flex text-[color:var(--text-primary)]"
            >
              <Logo height={28} />
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-[color:var(--text-secondary)]">
              {nav.footer.tagline}
            </p>
          </div>

          {/* Product column */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[color:var(--text-muted)]">
              {nav.footer.productHead}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.footer.productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="link-underline text-[14px] text-[color:var(--text-primary)] hover:text-[color:var(--brand-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[color:var(--text-muted)]">
              {nav.footer.companyHead}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.footer.companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="link-underline text-[14px] text-[color:var(--text-primary)] hover:text-[color:var(--brand-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[color:var(--text-muted)]">
              {nav.footer.legalHead}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.footer.legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="link-underline text-[14px] text-[color:var(--text-primary)] hover:text-[color:var(--brand-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--border-default)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-[color:var(--text-muted)]">
            {nav.footer.copyright}{' '}
            <span className="ml-1">{nav.footer.locationLine}</span>
          </p>
          <Link
            href={toggleHref}
            className="link-underline text-[13px] font-medium text-[color:var(--text-secondary)] hover:text-[color:var(--brand-primary)] transition-colors"
            aria-label={
              locale === 'de'
                ? 'Switch to English'
                : 'Zur deutschen Version wechseln'
            }
          >
            {switcherLabel} · {toggleLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
